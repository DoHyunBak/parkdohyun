export default function CatFooter({ meta }) {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="cat-card rounded-[2rem] px-6 py-8 text-center">
        <p className="text-lg font-black text-[#33271f]">{meta.ownerCredit}</p>
        {meta.ownerSite && (
          <a
            href={meta.ownerSite}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex rounded-full border border-[#d8c0a8] bg-white/50 px-4 py-2 text-sm font-bold text-[#8a5a42] transition hover:bg-white/80 hover:text-[#33271f] focus:outline-none focus:ring-2 focus:ring-[#c98b63]/45"
          >
            {meta.ownerSiteLabel ?? meta.ownerSite}
          </a>
        )}
        <p className="mt-2 text-sm text-[#756252]">{meta.dedication}</p>
      </div>
    </footer>
  );
}
