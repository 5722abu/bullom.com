import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/components/pages/HomePage";
import JobsPage from "@/components/pages/JobsPage";
import CompaniesPage from "@/components/pages/CompaniesPage";
import AboutPage from "@/components/pages/AboutPage";
import BlogPage from "@/components/pages/BlogPage";
import ContactPage from "@/components/pages/ContactPage";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import DashboardPage from "@/components/pages/DashboardPage";
import AdminDashboard from "@/components/pages/AdminDashboard";
import NotFoundPage from "@/components/pages/NotFoundPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "jobs":
        return <JobsPage onNavigate={handleNavigate} />;
      case "companies":
        return <CompaniesPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage />;
      case "login":
        return <LoginPage onNavigate={handleNavigate} />;
      case "register":
        return <RegisterPage onNavigate={handleNavigate} />;
      case "dashboard":
        return <DashboardPage />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  const isAuthPage = currentPage === "login" || currentPage === "register";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {!isAuthPage && (
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
      )}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      {!isAuthPage && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}
