import { useState, useRef, useEffect, useCallback, useMemo } from "react";

const MAX_INPUT_LENGTH = 500;   // 입력 최대 길이
const MIN_MSG_INTERVAL = 800;   // 연속 전송 최소 간격 (ms)
import "./DHBot.css";
import {
  BOT_NAME,
  WELCOME_MESSAGE,
  RESPONSES,
  FALLBACK_RESPONSES,
  QUICK_REPLY_HINTS,
} from "./dhBotKnowledge";

/* ── 시간 포매터 ── */
function formatTime(date) {
  return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false });
}

/* ── 키워드 매칭 엔진 ── */
function findResponse(input) {
  const normalized = input.toLowerCase().replace(/\s+/g, "");
  for (const resp of RESPONSES) {
    const hit = resp.keywords.some((kw) =>
      normalized.includes(kw.toLowerCase().replace(/\s+/g, ""))
    );
    if (hit) return resp;
  }
  return null;
}

/* ────────────────────────────────────────────────────────────
   보안: URL 허용 프로토콜 화이트리스트
   javascript:, data:, vbscript: 등의 XSS 벡터를 차단합니다.
──────────────────────────────────────────────────────────── */
const SAFE_URL_PATTERN = /^(https?:\/\/|mailto:|tel:)/i;

function sanitizeUrl(url) {
  const trimmed = url.trim();
  if (!SAFE_URL_PATTERN.test(trimmed)) {
    // 안전하지 않은 프로토콜 (javascript:, data:, vbscript: 등) 차단
    return "#blocked";
  }
  return trimmed;
}

/* ── 마크다운 인라인 렌더러 — BOT 메시지 전용 (bold + 줄바꿈 + 링크) ── */
function renderBotText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\n)/g);
  return parts.map((part, i) => {
    if (part === "\n") return <br key={i} />;
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>;
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const safeHref = sanitizeUrl(linkMatch[2]);
      return (
        <a
          key={i}
          href={safeHref}
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: "#a5b4fc", textDecoration: "underline" }}
          aria-label={safeHref === "#blocked" ? "차단된 링크" : linkMatch[1]}
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

/* ── 아이콘 컴포넌트 ── */
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* ── 메시지 아이템 ──
   보안: 유저 메시지는 React의 기본 텍스트 렌더링(이스케이프)을 사용하고,
   봇 메시지만 renderBotText()로 마크다운 파싱합니다.
   → 유저 입력의 **bold** / [link]() 마크다운 인젝션을 원천 차단합니다.
── */
function MessageItem({ msg }) {
  const isBot = msg.role === "bot";

  return (
    <div className={`dhbot-msg ${msg.role}`}>
      {isBot && (
        <div className="dhbot-msg-avatar" aria-hidden="true">
          🤖
        </div>
      )}
      <div>
        <div className="dhbot-msg-bubble">
          {isBot ? renderBotText(msg.text) : msg.text}
        </div>
        <div className="dhbot-msg-time">{msg.time}</div>
      </div>
    </div>
  );
}

/* ── 타이핑 인디케이터 ── */
function TypingIndicator() {
  return (
    <div className="dhbot-typing">
      <div className="dhbot-msg-avatar" aria-hidden="true">🤖</div>
      <div className="dhbot-typing-dots" aria-label="입력 중">
        <span /><span /><span />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   메인 DHBot 컴포넌트
────────────────────────────────────────── */
export default function DHBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [quickReplies, setQuickReplies] = useState(WELCOME_MESSAGE.quickReplies);
  const [hasGreeted, setHasGreeted] = useState(false);

  // 레이트 리밋: 마지막 전송 시각 추적
  const lastSentAt = useRef(0);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // 입력 글자 수 (실시간 표시용)
  const charCount = useMemo(() => inputText.length, [inputText]);
  const isOverLimit = charCount > MAX_INPUT_LENGTH;

  /* 스크롤 하단 고정 */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  /* 채팅창 열릴 때 웰컴 메시지 */
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setShowBadge(false);
      setHasGreeted(true);
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages([
            {
              id: Date.now(),
              role: "bot",
              text: WELCOME_MESSAGE.text,
              time: formatTime(new Date()),
            },
          ]);
          setQuickReplies(WELCOME_MESSAGE.quickReplies);
        }, 900);
      }, 300);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, hasGreeted]);

  /* 봇 응답 처리 */
  const botRespond = useCallback((userText) => {
    setIsTyping(true);
    const delay = 600 + Math.random() * 600;

    setTimeout(() => {
      const matched = findResponse(userText);
      const fallback =
        FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      const responseText = matched ? matched.text : fallback;
      const nextQuickReplies = matched?.quickReplies ?? QUICK_REPLY_HINTS;

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "bot",
          text: responseText,
          time: formatTime(new Date()),
        },
      ]);
      setQuickReplies(nextQuickReplies);
    }, delay);
  }, []);

  /* 메시지 전송 — 보안 검증 포함 */
  const sendMessage = useCallback(
    (text) => {
      const trimmed = text.trim();

      // 빈 입력 / 타이핑 중 차단
      if (!trimmed || isTyping) return;

      // 입력 길이 제한 초과 차단
      if (trimmed.length > MAX_INPUT_LENGTH) return;

      // 레이트 리밋: 마지막 전송 후 MIN_MSG_INTERVAL 이내 재전송 차단
      const now = Date.now();
      if (now - lastSentAt.current < MIN_MSG_INTERVAL) return;
      lastSentAt.current = now;

      setMessages((prev) => [
        ...prev,
        {
          id: now,
          role: "user",
          text: trimmed,
          time: formatTime(new Date()),
        },
      ]);
      setInputText("");
      // textarea 높이 초기화
      if (inputRef.current) inputRef.current.style.height = "auto";
      setQuickReplies([]);
      botRespond(trimmed);
    },
    [isTyping, botRespond]
  );

  /* 입력 키 핸들러 */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputText);
    }
  };

  /* textarea 자동 높이 + 입력 길이 하드캡 (MAX_INPUT_LENGTH + 10) */
  const handleInput = (e) => {
    const val = e.target.value.slice(0, MAX_INPUT_LENGTH + 10);
    setInputText(val);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
  };

  return (
    <>
      {/* ── 채팅창 ── */}
      {isOpen && (
        <div
          className="dhbot-window"
          role="dialog"
          aria-modal="true"
          aria-label="DH Bot 채팅"
        >
          {/* 헤더 */}
          <div className="dhbot-header">
            <div className="dhbot-avatar" aria-hidden="true">🤖</div>
            <div className="dhbot-header-info">
              <div className="dhbot-header-name">{BOT_NAME}</div>
              <div className="dhbot-header-status">박도현에 대해 물어보세요</div>
            </div>
            <button
              className="dhbot-header-close"
              onClick={() => setIsOpen(false)}
              aria-label="채팅창 닫기"
            >
              <CloseIcon />
            </button>
          </div>

          {/* 메시지 영역 */}
          <div className="dhbot-messages" role="log" aria-live="polite">
            {messages.map((msg) => (
              <MessageItem key={msg.id} msg={msg} />
            ))}
            {isTyping && <TypingIndicator />}

            {/* 빠른 답변 버튼 */}
            {!isTyping && quickReplies.length > 0 && (
              <div className="dhbot-quick-replies" role="group" aria-label="빠른 답변 선택">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    className="dhbot-quick-btn"
                    onClick={() => sendMessage(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 입력 영역 */}
          <div className="dhbot-input-area" style={{ flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
              <textarea
                ref={inputRef}
                className={`dhbot-input${isOverLimit ? " dhbot-input--overlimit" : ""}`}
                placeholder="무엇이든 물어보세요..."
                value={inputText}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                rows={1}
                aria-label="메시지 입력"
                maxLength={MAX_INPUT_LENGTH + 10}
              />
              <button
                className="dhbot-send-btn"
                onClick={() => sendMessage(inputText)}
                disabled={!inputText.trim() || isTyping || isOverLimit}
                aria-label="전송"
              >
                <SendIcon />
              </button>
            </div>
            {/* 글자 수 카운터 — 400자 이상일 때만 표시 */}
            {charCount > 400 && (
              <div
                style={{
                  fontSize: "10px",
                  textAlign: "right",
                  paddingRight: "4px",
                  color: isOverLimit ? "#ef4444" : "#6b7280",
                  transition: "color 0.15s",
                }}
                aria-live="polite"
                aria-label={`입력 글자 수: ${charCount} / ${MAX_INPUT_LENGTH}`}
              >
                {charCount} / {MAX_INPUT_LENGTH}
                {isOverLimit && " — 너무 깁니다"}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── FAB 버튼 ── */}
      <button
        className={`dhbot-fab ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "채팅창 닫기" : "DH Bot 채팅 열기"}
        aria-expanded={isOpen}
      >
        {showBadge && !isOpen && (
          <span className="dhbot-badge" aria-hidden="true">1</span>
        )}
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </>
  );
}
