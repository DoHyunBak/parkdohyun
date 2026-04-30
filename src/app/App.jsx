import { useEffect, useState } from "react";
import CatPortfolioPage from "@/pages/cat-portfolio/ui/CatPortfolioPage";
import DetailPage from "@/pages/detail/ui/DetailPage";
import PortfolioPage from "@/pages/portfolio/ui/PortfolioPage";
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
    if (route.type !== "home") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [route.type, route.itemId]);

  const isCatPortfolio = route.type === "cat";
  const page = isCatPortfolio ? (
    <CatPortfolioPage />
  ) : detailRoutes.has(route.type) ? (
    <DetailPage type={route.type} itemId={route.itemId} />
  ) : (
    <PortfolioPage />
  );

  return (
    <div className={isCatPortfolio ? "min-h-screen bg-[#fff8ef] text-stone-900" : "theme-high-contrast min-h-screen bg-slate-950"}>
      {page}
      <BackToTopButton />
    </div>
  );
}
