import { FileCode2 } from "lucide-react";

export default function SectionHeader({ title, description, fields }) {
  const lineCount = fields ? 3 + 1 + fields.length + 1 : 4;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <div className="developer-card overflow-hidden rounded-lg">
      <div className="developer-toolbar relative z-10 flex items-center justify-between gap-3 border-b px-3 py-2 font-mono text-xs text-zinc-500 md:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <FileCode2 className="h-3.5 w-3.5 text-zinc-500" />
          <span className="min-w-0 truncate text-[#6fb6d8]">portfolio/{title}.java</span>
        </div>
        <span className="shrink-0 text-zinc-700">{String(lineCount).padStart(2, "0")}</span>
      </div>
      <div className="relative z-10 grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 px-3 py-3 font-mono md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-x-4 md:px-4 md:py-4">
        <div className="select-none space-y-1.5 text-right text-xs text-zinc-700">
          {lineNumbers.map((n) => (
            <div key={n}>{n}</div>
          ))}
        </div>
        <div className="min-w-0 space-y-1.5 break-words text-[13px] md:text-sm">
          <div className="text-zinc-600">/**</div>
          <div className="text-zinc-600">&nbsp;*&nbsp;{description}</div>
          <div className="text-zinc-600">&nbsp;*/</div>
          {fields ? (
            <>
              <div>
                <span className="text-[#c792ea]">public class </span>
                <span className="text-white">{title}</span>
                <span className="text-zinc-500">{" {"}</span>
              </div>
              {fields.map((field) => (
                <div key={field.name} className="pl-4">
                  <span className="text-[#c792ea]">{field.type}</span>{" "}
                  <span className="text-[#82aaff]">{field.name}</span>
                  <span className="text-zinc-500">;</span>
                </div>
              ))}
              <div className="text-zinc-500">{"}"}</div>
            </>
          ) : (
            <div>
              <span className="text-[#c792ea]">public class </span>
              <span className="text-white">{title}</span>
              <span className="text-zinc-500">{" { ... }"}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
