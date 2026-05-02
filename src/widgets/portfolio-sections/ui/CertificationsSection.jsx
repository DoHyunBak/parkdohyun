import CodeCard from "@/shared/ui/CodeCard";

const STATUS_GROUPS = [
  { key: "취득",   color: "text-[#c6e478]" },
  { key: "준비중", color: "text-[#ecc48d]" },
  { key: "예정",   color: "text-zinc-500"  },
];

export default function CertificationsSection({ certifications = [] }) {
  const groups = STATUS_GROUPS.map((g) => ({
    ...g,
    items: certifications.filter((c) => c.status === g.key),
  })).filter((g) => g.items.length > 0);

  // 1 enum comment + each group: 1 header + N items, with blank separators between
  const lineCount =
    1 +
    groups.reduce((sum, g, i) => sum + 1 + g.items.length + (i > 0 ? 1 : 0), 0);
  const lineNumbers = Array.from({ length: lineCount }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <section id="certs" className="space-y-6 border-t border-zinc-900 pt-6 md:space-y-10 md:pt-8">
      <CodeCard
        fileName="certifications-list.java"
        topRight="package portfolio"
        lineNumbers={lineNumbers}
      >
        <div className="space-y-1 text-[13px] sm:text-sm">
          <div className="text-zinc-600">
            {"// enum Status { "}
            <span className="text-[#c6e478]">취득</span>
            {", "}
            <span className="text-[#ecc48d]">준비중</span>
            {", "}
            <span className="text-zinc-500">예정</span>
            {" }"}
          </div>

          {groups.map((group, gi) => {
            const names = group.items.map((c) => c.name);
            const varName = group.key === "취득" ? "obtained" : group.key === "준비중" ? "inProgress" : "planned";

            return (
              <div key={group.key} className={gi > 0 ? "pt-2" : ""}>
                {/* Status group header */}
                <div>
                  <span className="text-zinc-600">{"// ── "}</span>
                  <span className={group.color}>{group.key}</span>
                  <span className="text-zinc-600">{" ─────────────────────────"}</span>
                </div>

                {/* Array literal with cert names */}
                <div className="flex flex-wrap gap-x-0">
                  <span className="text-[#c792ea]">String</span>
                  <span className="text-zinc-500">[]</span>{" "}
                  <span className="text-[#82aaff]">{varName}</span>{" "}
                  <span className="text-zinc-500">= {"{ "}</span>
                  {names.map((name, j) => (
                    <span key={j}>
                      {j > 0 && <span className="text-zinc-500">, </span>}
                      <span className="text-[#ecc48d]">"{name}"</span>
                    </span>
                  ))}
                  <span className="text-zinc-500">{" };"}</span>
                </div>
              </div>
            );
          })}
        </div>
      </CodeCard>
    </section>
  );
}
