import { useEffect, useState } from "react";
import { facilities } from "../utils/facilities";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";
import { getmainservice } from "../servicesapi/mainserviceapi";
import { CategorySkeleton } from "./comancomponent/CardSkeleton";

function ServiceCategories() {
  const navigate = useNavigate();
  const { triggerLoading } = useLoading();
  const handleNavigate = (item) => {
    triggerLoading();
    navigate(`/${item.title.toLowerCase().replace(/\s+/g, "-")}`);
  };
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const initialLimit = 10;
  const visibleCategories = showAll
    ? facilities
    : facilities.slice(0, initialLimit);
  const hasMoreThanLimit = facilities.length > initialLimit;

  const getserviceapiall = async () => {
    try {
      setIsLoading(true);
      const responcivedata = await getmainservice();
      console.log("my responcive", responcivedata);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getserviceapiall();
  }, []);

  return (
    <>
      {/* <!-- Category Bento Grid --> */}
      <section className="md:py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-stack-lg flex justify-between items-end">
          <div>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary">
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
        {isLoading ? (
          <CategorySkeleton />
        ) : (
          <motion.div
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-gutter"
          >
            <AnimatePresence mode="popLayout">
              {visibleCategories?.map((item) => (
                <motion.div
                  onClick={() => handleNavigate(item)}
                  key={item.id}
                  layout
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
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
        )}
      </section>
    </>
  );
}

export default ServiceCategories;
