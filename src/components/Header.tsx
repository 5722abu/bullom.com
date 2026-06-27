import { useState, useEffect } from "react";
import { Menu, X, LogOut, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, setUser } = useStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "jobs", label: "Jobs" },
    { id: "companies", label: "Companies" },
    { id: "about", label: "About" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-yellow-400/20 shadow-lg shadow-yellow-400/5"
          : "bg-black/80 backdrop-blur-sm border-b border-yellow-400/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2.5 font-bold text-xl text-white group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center text-black font-extrabold text-sm shadow-lg shadow-yellow-400/20">
              B
            </div>
            <span className="tracking-tight">
              BULLOM <span className="text-yellow-400">GROUP</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  currentPage === item.id
                    ? "text-yellow-400"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-yellow-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-sm text-zinc-300 hidden lg:block">{user.name}</span>
                </div>
                <button
                  onClick={() =>
                    onNavigate(user.role === "admin" ? "admin" : "dashboard")
                  }
                  className="text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
                >
                  {user.role === "admin" ? "Admin" : "Dashboard"}
                </button>
                <button
                  onClick={() => setUser(null)}
                  className="p-2 text-zinc-400 hover:text-yellow-400 transition-colors rounded-lg hover:bg-white/5"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => onNavigate("login")}
                  className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 rounded-lg transition-colors hover:bg-white/5"
                >
                  Login
                </button>
                <button
                  onClick={() => onNavigate("register")}
                  className="text-sm font-bold px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all hover:scale-105 active:scale-95"
                >
                  Sign Up
                </button>
              </div>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white rounded-lg hover:bg-white/5"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-6 space-y-1 border-t border-yellow-400/10 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-white transition-all ${
                      currentPage === item.id
                        ? "bg-yellow-400/10 text-yellow-400 font-semibold"
                        : "hover:bg-zinc-900"
                    }`}
                  >
                    {item.label}
                    <ChevronRight className="w-4 h-4 text-zinc-600" />
                  </button>
                ))}
                {user ? (
                  <div className="flex gap-2 mt-4 pt-4 border-t border-yellow-400/10">
                    <button
                      onClick={() => {
                        onNavigate(user.role === "admin" ? "admin" : "dashboard");
                        setMobileMenuOpen(false);
                      }}
                      className="flex-1 px-4 py-3 bg-yellow-400 text-black font-bold rounded-xl"
                    >
                      {user.role === "admin" ? "Admin Panel" : "Dashboard"}
                    </button>
                    <button
                      onClick={() => {
                        setUser(null);
                        setMobileMenuOpen(false);
                      }}
                      className="px-4 py-3 border border-yellow-400/30 text-white rounded-xl"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2 mt-4 pt-4 border-t border-yellow-400/10">
                    <button
                      onClick={() => {
                        onNavigate("login");
                        setMobileMenuOpen(false);
                      }}
                      className="flex-1 px-4 py-3 border border-yellow-400/30 text-white rounded-xl font-medium"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        onNavigate("register");
                        setMobileMenuOpen(false);
                      }}
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
