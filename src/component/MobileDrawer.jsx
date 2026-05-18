import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { directoryCategories, navigationData } from "../utils/headerdata";
import { Link, NavLink } from "react-router-dom";

import { useLoading } from "../context/LoadingContext";

const MobileDrawer = ({ isOpen, onClose, isMobileDirOpen, setIsMobileDirOpen, isDirectoryPage }) => {
  const { triggerLoading } = useLoading();
  const closeMobileMenu = () => {
    onClose();
    setIsMobileDirOpen(false);
  };

  const handleLinkClick = () => {
    triggerLoading();
    closeMobileMenu();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMobileMenu}
            style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
          />

          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            style={{ position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 9999, width: "80vw", maxWidth: "320px", background: "white", boxShadow: "0 25px 50px rgba(0,35,102,0.18)", display: "flex", flexDirection: "column", overflowY: "auto" }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100">
              <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[10px]">domain</span>
                </div>
                <span className="font-bold text-primary text-[15px] tracking-tight">SikarCity</span>
              </Link>
              <button
                onClick={closeMobileMenu}
                className="text-gray-400 hover:text-primary transition-colors pt-1.5"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-[26px]">close</span>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-3 pt-2 pb-6 gap-1 flex-1">
              {navigationData.map((item) => {
                if (item.name === "Directory") {
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => setIsMobileDirOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-200 ${isMobileDirOpen || isDirectoryPage
                          ? "bg-primary-container/10 text-primary font-bold"
                          : "text-on-surface-variant hover:bg-surface-container/50 hover:text-primary"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[20px]">grid_view</span>
                          <span className="font-medium text-[14px]">Directory</span>
                        </div>
                        <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isMobileDirOpen ? "rotate-180" : ""}`}>
                          expand_more
                        </span>
                      </button>

                      <AnimatePresence>
                        {isMobileDirOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-2 px-1 pt-2 pb-1">
                              {directoryCategories.map((category) => (
                                <Link
                                  key={category.id}
                                  to={category.path}
                                  onClick={handleLinkClick}
                                  className="flex flex-col items-center gap-1.5 p-2 rounded-md border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all group"
                                >
                                  <div className={`w-9 h-9 ${category.bg} rounded-md flex items-center justify-center transition-transform group-hover:scale-110`}>
                                    <span className={`material-symbols-outlined ${category.color} text-[20px]`}>
                                      {category.icon}
                                    </span>
                                  </div>
                                  <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary transition-colors text-center leading-tight">
                                    {category.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 font-medium text-[14px] ${isActive
                        ? "bg-primary-container/10 text-primary font-bold"
                        : "text-on-surface-variant hover:bg-surface-container/50 hover:text-primary"
                      }`
                    }
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {item.name === "Home" ? "home" : "help"}
                    </span>
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-gray-100">
              <p className="text-[11px] text-gray-400 text-center">© SikarCity — Explore Sikar</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileDrawer;