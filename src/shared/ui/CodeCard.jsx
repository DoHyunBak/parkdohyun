export default function CodeCard({ fileName, topRight, lineNumbers = ["01", "02"], children, className = "" }) {
  return (
    <article className={`overflow-hidden rounded-lg border border-zinc-800 bg-[#090b0f] ${className}`}>
      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#111318] px-4 py-2 font-mono text-xs text-zinc-500">
        <span className="text-[#6fb6d8]">{fileName}</span>
        <span>{topRight}</span>
      </div>
      <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 px-4 py-4 font-mono">
        <div className="select-none space-y-3 text-right text-sm text-zinc-700">
          {lineNumbers.map((lineNumber) => (
            <div key={lineNumber}>{lineNumber}</div>
          ))}
        </div>
        <div className="space-y-3">{children}</div>
      </div>
    </article>
  );
}
