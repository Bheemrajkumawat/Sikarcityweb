import React, { useState } from "react";
import { facilities } from "../utils/facilities";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ServiceCategories() {
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(`/${item.title.toLowerCase().replace(/\s+/g, '-')}`);
  };
  const [showAll, setShowAll] = useState(false);
  // The number of items to display by default before expanding
  const initialLimit = 10;
  // If showAll is true, display the full array; otherwise, display only the first 10 items
  const visibleCategories = showAll
    ? facilities
    : facilities.slice(0, initialLimit);
  // Boolean check to determine if the "View All" button should be rendered
  const hasMoreThanLimit = facilities.length > initialLimit;
  return (
    <>
      {/* <!-- Category Bento Grid --> */}
      <section className="py-stack-lg px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-stack-lg flex justify-between items-end">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Browse Categories
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Find exactly what you need in the city
            </p>
          </div>
          {hasMoreThanLimit && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-secondary font-label-md flex items-center gap-1 whitespace-nowrap"
            >
              {showAll ? "Show Less" : "View All Categories"}
              <span
                className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
          )}
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-gutter"
        >
          <AnimatePresence mode="popLayout">
            {visibleCategories?.map((item) => (
              <motion.div
                onClick={() => handleNavigate(item)}
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(0,35,102,0.08)] hover:-translate-y-1 hover:shadow-[0px_12px_32px_rgba(0,35,102,0.12)] transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-stack-md transition-colors ${item.iconBoxClass} group-hover:text-white`}
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon={item.icon}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-[20px] mb-2">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-body-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}

export default ServiceCategories;
