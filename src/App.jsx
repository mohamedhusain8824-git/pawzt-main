import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MetaManager from "./components/MetaManager.jsx";
import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import SeoInfoPage from "./pages/SeoInfoPage.jsx";
import {
  blogPaths,
  faqPaths,
  genericPagePaths,
  pageMetadata,
  servicePaths,
} from "./data/seoMetadata.js";

const pathAliases = {
  "/blog": "/blogs",
  "/help-center": "/faq",
};

function getPath() {
  const rawPath = window.location.pathname.toLowerCase().replace(/\/$/, "") || "/";
  const path = pathAliases[rawPath] || rawPath;

  if (pageMetadata[path]) return path;
  return "/";
}

export default function App() {
  const [path, setPath] = useState(getPath());

  const navigate = (nextPath) => {
    const normalizedNextPath = pathAliases[nextPath] || nextPath;
    window.history.pushState({}, "", normalizedNextPath);
    setPath(getPath());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handlePopState = () => setPath(getPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const isServicePath = servicePaths.includes(path);
  const isBlogPath = blogPaths.includes(path);
  const isFaqPath = faqPaths.includes(path);
  const isGenericPath = genericPagePaths.includes(path);

  return (
    <>
      <MetaManager path={path} />
      <Header navigate={navigate} activePath={path} />

      {path === "/" && <Home />}
      {isServicePath && <ServicesPage />}
      {isFaqPath && <FAQPage />}
      {isBlogPath && <BlogsPage />}
      {isGenericPath && <SeoInfoPage path={path} />}

      <Footer navigate={navigate} />
    </>
  );
}
