export default function CodeCard({ fileName, topRight, lineNumbers = ["01", "02"], children, className = "" }) {
  return (
    <article className={`developer-card overflow-hidden rounded-lg ${className}`}>
      <div className="developer-toolbar relative z-10 flex items-center justify-between gap-3 border-b px-3 py-2 font-mono text-xs text-zinc-500 md:px-4">
        <span className="min-w-0 truncate text-[#6fb6d8]">{fileName}</span>
        <span className="shrink-0 text-right">{topRight}</span>
      </div>
      <div className="relative z-10 grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 px-3 py-3 font-mono md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-x-4 md:px-4 md:py-4">
        <div className="select-none space-y-3 text-right text-xs text-zinc-700 md:text-sm">
          {lineNumbers.map((lineNumber) => (
            <div key={lineNumber}>{lineNumber}</div>
          ))}
        </div>
        <div className="min-w-0 space-y-3 break-words">{children}</div>
      </div>
    </article>
  );
}
