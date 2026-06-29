import { useState } from "react";
import { globalStyles } from "../blog/styles/globalStyles.js";
import HomePage from "../blog/pages/HomePage.jsx";
import PetSittingPage from "../blog/pages/PetSittingPage.jsx";
import PetWalkingPage from "../blog/pages/PetWalkingPage.jsx";
import VetConsultationPage from "../blog/pages/VetConsultationPage.jsx";
import GroomingPage from "../blog/pages/GroomingPage.jsx";
import BoardingPage from "../blog/pages/BoardingPage.jsx";

const blogStyles = globalStyles
  .replace(/\*\s*\{[^}]*\}/, ".blogs-route * { box-sizing: border-box; }")
  .replace(/body\s*\{[^}]*\}/, ".blogs-route { font-family: 'Inter', sans-serif; }")
  .replace(/\.nav\s*\{[^}]*\}/g, "")
  .replace(/\.footer\s*\{[^}]*\}/g, "");

export default function BlogsPage() {
  const [page, setPage] = useState("home");

  const handleNavigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBackToBlogs = () => handleNavigate("home");

  return (
    <main className="blogs-route">
      <style>{blogStyles}</style>

      {page === "home" && <HomePage onNavigate={handleNavigate} />}
      {page === "pet-sitting" && <PetSittingPage onBack={goBackToBlogs} />}
      {page === "pet-walking" && <PetWalkingPage onBack={goBackToBlogs} />}
      {page === "vet-consultation" && <VetConsultationPage onBack={goBackToBlogs} />}
      {page === "grooming" && <GroomingPage onBack={goBackToBlogs} />}
      {page === "boarding" && <BoardingPage onBack={goBackToBlogs} />}
    </main>
  );
}
