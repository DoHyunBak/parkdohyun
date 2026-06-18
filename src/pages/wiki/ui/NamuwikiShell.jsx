import React from "react";

/* 모던 Docs 3-컬럼 셸: 좌측 파일트리 · 중앙 본문 · 우측 TOC */
export default function NamuwikiShell({ leftSidebar, mainContent, rightSidebar }) {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div id="app">
      <div className="namu docs-shell">
        <aside className="docs-col docs-left">{leftSidebar}</aside>
        <main className="docs-col docs-main">{mainContent}</main>
        <aside className="docs-col docs-right">{rightSidebar}</aside>
      </div>

      <div className="docs-floating">
        <button type="button" onClick={toTop} aria-label="맨 위로">
          ↑
        </button>
        <button type="button" onClick={toBottom} aria-label="맨 아래로">
          ↓
        </button>
      </div>
    </div>
  );
}
