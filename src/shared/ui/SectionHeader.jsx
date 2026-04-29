import { FileCode2 } from "lucide-react";

export default function SectionHeader({ title, description, fields }) {
  const lineCount = fields ? 3 + 1 + fields.length + 1 : 4;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-[#090b0f]">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#111318] px-4 py-2 font-mono text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <FileCode2 className="h-3.5 w-3.5 text-zinc-500" />
          <span className="text-[#6fb6d8]">portfolio/{title}.java</span>
        </div>
        <span className="text-zinc-700">{String(lineCount).padStart(2, "0")}</span>
      </div>
      <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 px-4 py-4 font-mono">
        <div className="select-none space-y-1.5 text-right text-xs text-zinc-700">
          {lineNumbers.map((n) => (
            <div key={n}>{n}</div>
          ))}
        </div>
        <div className="space-y-1.5 text-sm">
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
