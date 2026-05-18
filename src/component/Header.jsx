import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationData, directoryCategories } from "../utils/headerdata";
import { motion, AnimatePresence } from "framer-motion";
import MobileDrawer from "./MobileDrawer";
import { useLoading } from "../context/LoadingContext";


const Header = () => {
  const { triggerLoading } = useLoading();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDirOpen, setIsMobileDirOpen] = useState(false);
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const isDirectoryPage =
    directoryCategories.some((cat) => location.pathname === cat.path) ||
    location.pathname.startsWith("/details/");

  return (
    <header className="bg-white/80 dark:bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-[0px_4px_20px_rgba(0,35,102,0.05)] border-b border-outline-variant/30">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-2 md:py-0 md:max-w-container-max md:mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-stack-md">
          <Link to="/" className="group flex items-center gap-2" onClick={triggerLoading}>
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="material-symbols-outlined text-on-primary text-[20px]">domain</span>
            </div>
            <span className="font-headline-sm text-[20px] font-bold text-primary tracking-tight">
              SikarCity
            </span>
          </Link>
        </div>

        {/* Desktop nav & Actions */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-1">
            {navigationData?.map((item) => (
              <div
                key={item.id}
                className="relative px-2 py-2"
                onMouseEnter={() => item.name === "Directory" && setIsHovered(true)}
                onMouseLeave={() => item.name === "Directory" && setIsHovered(false)}
              >
                <NavLink
                  to={item.path || "#"}
                  end={item.path === "/"}
                  onClick={() => {
                    if (item.path !== "#") triggerLoading();
                  }}
                  className={({ isActive }) => {
                    const isActuallyActive =
                      item.name === "Directory" ? isHovered || isDirectoryPage : isActive;
                    return `font-label-md px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-1 ${isActuallyActive
                      ? "bg-primary-container/10 text-primary font-bold"
                      : "text-on-surface-variant hover:bg-surface-container/50 hover:text-primary"
                      }`;
                  }}
                >
                  {item.name}
                  {item.name === "Directory" && (
                    <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  )}
                </NavLink>

                {item.name === "Directory" && (
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full right-[-50px] w-[540px] bg-white/90 dark:bg-surface/90 backdrop-blur-xl rounded-2xl shadow-[0px_20px_50px_rgba(0,35,102,0.15)] border border-white/50 dark:border-white/10 p-4 z-50 overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-primary via-secondary to-primary" />
                        <div className="mb-3 pb-3 border-b border-outline-variant/20 flex items-center justify-between">
                          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Browse Directory</h4>
                          <span className="material-symbols-outlined text-outline-variant text-[20px]">grid_view</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                          {directoryCategories.map((category) => (
                            <Link
                              key={category.id}
                              to={category.path}
                              className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-all group border border-transparent hover:border-outline-variant/30 hover:shadow-sm"
                              onClick={() => {
                                setIsHovered(false);
                                triggerLoading();
                              }}
                            >
                              <div className={`w-8 h-8 ${category.bg} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                                <span className={`material-symbols-outlined ${category.color} text-[18px]`}>{category.icon}</span>
                              </div>
                              <div className="flex-1">
                                <h5 className="font-label-md text-[13px] text-on-surface group-hover:text-primary transition-colors leading-none">{category.name}</h5>
                                <p className="text-[10px] text-on-surface-variant opacity-70">View listings</p>
                              </div>
                              <span className="material-symbols-outlined text-[14px] text-outline-variant opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">arrow_forward</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-primary bg-primary-container/10 hover:bg-primary-container/20 transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary hover:bg-primary-container/10 p-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
        </div>
      </div>

      {/* Portal drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isMobileDirOpen={isMobileDirOpen}
        setIsMobileDirOpen={setIsMobileDirOpen}
        isDirectoryPage={isDirectoryPage}
      />
    </header>
  );
};

export default Header;