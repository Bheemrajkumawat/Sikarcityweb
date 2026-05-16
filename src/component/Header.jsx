import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigationData } from "../utils/headerdata";
import { motion, AnimatePresence } from "framer-motion";

const directoryCategories = [
  { id: 1, name: "Hospitals", path: "/hospitals", icon: "medical_services", color: "text-red-500", bg: "bg-red-50" },
  { id: 2, name: "Restaurants", path: "/restaurants", icon: "restaurant", color: "text-orange-500", bg: "bg-orange-50" },
  { id: 3, name: "Cafes", path: "/cafes", icon: "local_cafe", color: "text-brown-500", bg: "bg-orange-100/30" },
  { id: 4, name: "Schools", path: "/schools", icon: "school", color: "text-blue-500", bg: "bg-blue-50" },
  { id: 5, name: "Hotels", path: "/hotels", icon: "hotel", color: "text-indigo-500", bg: "bg-indigo-50" },
  { id: 6, name: "Shops", path: "/shops", icon: "shopping_bag", color: "text-pink-500", bg: "bg-pink-50" },
  { id: 7, name: "Parks", path: "/parks", icon: "park", color: "text-green-500", bg: "bg-green-50" },
  { id: 8, name: "Gyms", path: "/gyms", icon: "fitness_center", color: "text-slate-700", bg: "bg-slate-100" },
  { id: 9, name: "Banks", path: "/banks", icon: "account_balance", color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: 10, name: "Tourist Places", path: "/tourist-places", icon: "map", color: "text-amber-600", bg: "bg-amber-50" },
];

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-[0px_4px_20px_rgba(0,35,102,0.05)] border-b border-outline-variant/30">
      <div className="flex justify-between items-center w-full px-margin-desktop py-2 md:py-0  max-w-container-max mx-auto">
        <div className="flex items-center gap-stack-md">
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="material-symbols-outlined text-white text-[20px]">domain</span>
            </div>
            <span className="font-headline-sm text-[20px] font-bold text-primary tracking-tight">
              SikarCity
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-1">
          {navigationData?.map((item) => (
            <div
              key={item.id}
              className="relative px-2 py-2"
              onMouseEnter={() => item.name === "Directory" && setIsHovered(true)}
              onMouseLeave={() => item.name === "Directory" && setIsHovered(false)}
            >
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `font-label-md px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-1 ${isActive
                    ? "bg-primary-container/10 text-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container/50 hover:text-primary"
                  }`
                }
              >
                {item.name}
                {item.name === "Directory" && (
                  <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                )}
              </NavLink>

              {/* Mega Dropdown Menu */}
              {item.name === "Directory" && (
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full right-[-50px] w-[540px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0px_20px_50px_rgba(0,35,102,0.15)] border border-white/50 p-4 z-50 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-primary via-secondary to-primary" />
                      <div className="mb-3 pb-3 border-b border-outline-variant/20 flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Browse Directory</h4>
                        </div>
                        <span className="material-symbols-outlined text-outline-variant text-[20px]">grid_view</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                        {directoryCategories.map((category) => (
                          <Link
                            key={category.id}
                            to={category.path}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/50 transition-all group border border-transparent hover:border-outline-variant/30 hover:shadow-sm"
                            onClick={() => setIsHovered(false)}
                          >
                            <div className={`w-8 h-8 ${category.bg} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                              <span className={`material-symbols-outlined ${category.color} text-[18px]`}>
                                {category.icon}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-label-md text-[13px] text-on-surface group-hover:text-primary transition-colors leading-none">
                                {category.name}
                              </h5>
                              <p className="text-[10px] text-on-surface-variant opacity-70">View listings</p>
                            </div>
                            <span className="material-symbols-outlined text-[14px] text-outline-variant opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                              arrow_forward
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-outline-variant/20 flex justify-center">
                        <Link to="/directory" className="text-primary text-[11px] font-bold hover:underline flex items-center gap-1" onClick={() => setIsHovered(false)}>
                          Full Directory <span className="material-symbols-outlined text-[14px]">east</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
