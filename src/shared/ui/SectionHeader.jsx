export default function SectionHeader({ title, description }) {
  return (
    <div>
      <h2 className="mb-3 text-3xl font-black tracking-tight text-white">{title}</h2>
      <p className="text-sm text-zinc-400 font-mono">{description}</p>
    </div>
  );
}
