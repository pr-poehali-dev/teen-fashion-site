import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import NewPage from "@/pages/NewPage";
import TrendsPage from "@/pages/TrendsPage";
import BrandPage from "@/pages/BrandPage";
import BlogPage from "@/pages/BlogPage";
import ContactsPage from "@/pages/ContactsPage";

type Page = "home" | "catalog" | "new" | "trends" | "brand" | "blog" | "contacts";

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage onNavigate={navigate} />;
      case "catalog": return <CatalogPage />;
      case "new": return <NewPage />;
      case "trends": return <TrendsPage />;
      case "brand": return <BrandPage />;
      case "blog": return <BlogPage />;
      case "contacts": return <ContactsPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-bg)" }}>
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
