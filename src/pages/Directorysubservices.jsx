import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  hospitalFilters, hospitalsData,
  restaurantFilters, restaurantsData,
  cafeFilters, cafesData,
  schoolFilters, schoolsData,
  hotelFilters, hotelsData,
  shopFilters, shopsData,
  parkFilters, parkData,
  gymFilters, gymsData,
  bankFilters, banksData,
  touristFilters, touristPlacesData
} from "../utils/Directorysubservices";

function Directorysubservices() {
  const { id } = useParams();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLocation = (location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(url, "_blank");
  };

  // Map the URL parameter to the corresponding data and title
  const categoryConfig = {
    "hospitals": { title: "Hospitals", data: hospitalsData, filters: hospitalFilters },
    "restaurants": { title: "Restaurants", data: restaurantsData, filters: restaurantFilters },
    "cafes": { title: "Cafes", data: cafesData, filters: cafeFilters },
    "schools": { title: "Schools", data: schoolsData, filters: schoolFilters },
    "hotels": { title: "Hotels", data: hotelsData, filters: hotelFilters },
    "shops": { title: "Shops", data: shopsData, filters: shopFilters },
    "parks": { title: "Parks", data: parkData, filters: parkFilters },
    "gyms": { title: "Gyms", data: gymsData, filters: gymFilters },
    "banks": { title: "Banks", data: banksData, filters: bankFilters },
    "tourist-places": { title: "Tourist Places", data: touristPlacesData, filters: touristFilters },
  };

  const currentCategory = categoryConfig[id] || categoryConfig["hospitals"];
  const displayData = currentCategory.data;
  const displayTitle = currentCategory.title;
  const currentFilters = currentCategory.filters;

  // Logic to filter data based on both Category AND Search Query
  const filteredItems = displayData.filter((item) => {
    const matchesCategory =
      activeFilter === "all" || item.type === activeFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <>
      <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        <main className="relative min-h-screen">
          <div className="absolute inset-0 jali-pattern pointer-events-none"></div>
          <section className="relative pt-stack-lg pb-stack-md px-margin-desktop max-w-container-max mx-auto">
            <div className="mb-stack-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-md">
                <div>
                  <h1 className="font-headline-lg text-headline-lg text-primary-container mb-unit">
                    {displayTitle}
                  </h1>
                  <p className="text-on-surface-variant font-body-md">
                    Comprehensive medical facilities and healthcare providers in
                    Sikar.
                  </p>
                </div>
                <div className="flex-1 max-w-lg">
                  <div className="relative group">
                    <input
                      className="w-full h-14 px-stack-md pr-12 bg-white border border-outline-variant rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 shadow-sm"
                      placeholder="Search hospitals or specialists..."
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary">
                      search
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-stack-sm mb-stack-lg">
              <AnimatePresence mode="popLayout">
                {currentFilters && currentFilters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(filter.slug)}
                    className={`px-stack-md py-unit rounded-full font-label-md transition-all duration-300 shadow-sm ${activeFilter === filter.slug
                      ? "bg-primary-container text-on-primary-container ring-2 ring-primary/20"
                      : "bg-white border border-outline-variant text-on-surface-variant hover:bg-surface-container"
                      }`}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,35,102,0.08)] hover:shadow-[0px_12px_32px_rgba(0,35,102,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <img
                        className="w-full h-full object-cover"
                        data-alt={item.name}
                        src={item.image}
                        alt={item.name}
                      />
                      {item.tag && (
                        <span
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full font-label-md text-xs ${item.tagClass || "bg-secondary-container text-on-secondary-container"}`}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-stack-md">
                      <div className="flex justify-between items-start mb-unit">
                        <h3 className="font-headline-md text-primary-container">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 text-secondary">
                          <span
                            className="material-symbols-outlined text-sm"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                          >
                            star
                          </span>
                          <span className="font-label-md">
                            {" "}
                            {item.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-on-surface-variant text-sm mb-stack-md flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          location_on
                        </span>
                        {item.location}
                      </p>
                      <div className="space-y-unit mb-stack-md">
                        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-base text-primary">
                            call
                          </span>
                          <span>{item.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-base text-primary">
                            schedule
                          </span>
                          <span
                            className={
                              item.is24Hours
                                ? "text-secondary font-semibold"
                                : ""
                            }
                          >
                            {item.timing}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-unit border-t border-outline-variant">
                        <button
                          onClick={() => handleLocation(item.location)}
                          className="flex-1 bg-surface-container-low text-primary font-label-md py-2 rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
                        >
                          Location
                        </button>
                        <Link to={`/details/${id || "hospitals"}/${item.id}`} className="flex-1">
                          <button
                            type="button"
                            className="w-full bg-primary text-on-primary font-label-md py-2 rounded-lg hover:opacity-90 transition-all cursor-pointer"
                          >
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-stack-lg">
                <p className="text-on-surface-variant">
                  No items found matching your criteria.
                </p>
              </div>
            )}
          </section>
          <section className="max-w-container-max mx-auto px-margin-desktop py-stack-lg flex items-center justify-center">
            <div className="h-px  flex-1 bg-outline-variant"></div>
            <div className="px-stack-lg">
              {/* <div className="w-16 h-16 border-t-2 border-l-2 border-primary rotate-45 flex items-center justify-center -translate-y-4">
                <div className="w-12 h-12 border-t border-l border-secondary -rotate-12"></div>
              </div> */}
            </div>
            <div className="h-px flex-1 bg-outline-variant"></div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Directorysubservices;
