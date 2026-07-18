import { useEffect, useState } from "react";
import CatPortfolioPage from "@/pages/cat-portfolio/ui/CatPortfolioPage";
import DetailPage from "@/pages/detail/ui/DetailPage";
import HomePage from "@/pages/home/ui/HomePage";
import WikiPortfolioPage from "@/pages/wiki/ui/WikiPortfolioPage";
import BackToTopButton from "@/shared/ui/BackToTopButton";

const detailRoutes = new Set(["education", "skills", "language", "certifications"]);

function getHashRoute() {
  if (typeof window === "undefined") return { type: "home", itemId: null };

  const hash = window.location.hash;
  if (!hash.startsWith("#/")) return { type: "home", itemId: null };

  const [type = "home", itemId = null] = hash.slice(2).split("/");
  return { type, itemId };
}

export default function App() {
  const [route, setRoute] = useState(getHashRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getHashRoute());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [route.type, route.itemId]);

  const isCatPortfolio = route.type === "cat";
  const isDetail = detailRoutes.has(route.type);
  const isWiki = route.type === "wiki";

  const page = isCatPortfolio ? (
    <CatPortfolioPage />
  ) : isDetail ? (
    <DetailPage type={route.type} itemId={route.itemId} />
  ) : isWiki ? (
    <WikiPortfolioPage />
  ) : (
    <HomePage />
  );

  let wrapperClass = "min-h-screen bg-[#050505]";
  if (isCatPortfolio) wrapperClass = "min-h-screen bg-[#fff8ef] text-stone-900";
  else if (isWiki) wrapperClass = "min-h-screen text-[#212529]";

  return (
    <div className={wrapperClass}>
      {page}
      {(isCatPortfolio || isDetail) && <BackToTopButton />}
    </div>
  );
}
