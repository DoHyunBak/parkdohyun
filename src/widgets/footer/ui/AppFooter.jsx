export default function AppFooter({ name }) {
  return (
    <footer className="border-t border-zinc-900 py-12 text-center">
      <p className="text-sm font-bold text-zinc-500 font-mono">© {name}.</p>
    </footer>
  );
}
