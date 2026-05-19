import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  hospitalsData,
  restaurantsData,
  cafesData,
  schoolsData,
  hotelsData,
  shopsData,
  parkData,
  gymsData,
  banksData,
  touristPlacesData
} from "../utils/Directorysubservices";

function Servicedetails() {
  const { category, id } = useParams();

  const dataMap = {
    "hospitals": hospitalsData,
    "restaurants": restaurantsData,
    "cafes": cafesData,
    "schools": schoolsData,
    "hotels": hotelsData,
    "shops": shopsData,
    "parks": parkData,
    "gyms": gymsData,
    "banks": banksData,
    "tourist-places": touristPlacesData,
  };

  const categoryData = dataMap[category] || hospitalsData;
  const item = categoryData.find((d) => d.id === parseInt(id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-headline-lg text-primary mb-4">Service Not Found</h2>
          <p className="text-on-surface-variant mb-6">The service you are looking for does not exist or has been removed.</p>
          <a href="/" className="bg-primary text-on-primary px-6 py-2 rounded-lg">Go Back Home</a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-mobile md:py-stack-lg">
        {/* <!-- Image Gallery Bento Grid --> */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-unit h-[400px] md:h-[500px] mb-stack-lg rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,35,102,0.08)]"
        >
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end p-stack-md">
              <span className="text-[#ffffff] font-label-md bg-secondary px-3 py-1 rounded-full">
                Main View
              </span>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
          </div>
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
          </div>
        </motion.section>

        {/* <!-- Two Column Content --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* <!-- Main Content --> */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-stack-lg"
          >
            <div className="bg-surface-container-lowest p-stack-md rounded-xl shadow-sm border border-outline-variant">
              <div className="flex flex-wrap items-center justify-between gap-stack-sm mb-4">
                <h1 className="font-headline-lg text-headline-md md:text-headline-lg text-primary">
                  {item.name}
                </h1>
                <div className="flex gap-2">
                  {item.tag && (
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-label-md font-label-md border ${item.tagClass || "bg-primary-container/10 text-primary-container border-primary-container/20"}`}>
                      <span className="material-symbols-outlined text-[18px]" data-weight="fill">
                        verified
                      </span>
                      {item.tag}
                    </span>
                  )}
                  {item.is24Hours && (
                    <span className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-label-md font-label-md">
                      <span className="material-symbols-outlined text-[18px]">
                        emergency
                      </span>
                      Open 24/7
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 mb-6">
                <div className="flex text-secondary-container">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      data-weight={i < Math.floor(item.rating) ? "fill" : "normal"}
                    >
                      {i < Math.floor(item.rating) ? "star" : (i < item.rating ? "star_half" : "star")}
                    </span>
                  ))}
                </div>
                <span className="text-on-surface-variant font-body-md">
                  {item.rating} (Verified Rating)
                </span>
                <span className="mx-2 text-outline">|</span>
                <span className="text-on-surface-variant font-body-md capitalize">
                  {category.replace("-", " ")} • {item.type}
                </span>
              </div>
              <div className="space-y-4">
                <h2 className="font-headline-md text-headline-md text-on-background flex items-center gap-2">
                  Overview
                  <div className="h-px grow bg-outline-variant ml-2"></div>
                </h2>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  {item.name} is one of the most trusted names in Sikar for {category.replace("-", " ")}.
                  Located at {item.location}, it offers {item.timing === "Open 24 Hours" ? "round the clock services" : `services during ${item.timing}`}
                  with a commitment to excellence and community service.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> Verified Business
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> Service Excellence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> Professional Staff
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> Community Trusted
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative py-stack-md flex justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant"></div>
              </div>
              <div className="relative bg-background px-4">
                <div className="w-12 h-16 border-2 border-primary arch-mask flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">star</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-stack-md rounded-xl shadow-sm border border-outline-variant">
              <div className="flex justify-between items-center mb-stack-md">
                <h2 className="font-headline-md text-headline-md text-on-background">User Reviews</h2>
                <button className="text-primary font-label-md hover:underline">Write a Review</button>
              </div>
              <div className="p-4 bg-surface rounded-lg border border-outline-variant text-center py-10">
                <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">rate_review</span>
                <p className="text-on-surface-variant">Be the first to review {item.name}</p>
              </div>
            </div>
          </motion.div>

          {/* <!-- Sidebar --> */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-stack-lg"
          >
            <div className="sticky top-24 bg-surface-container-lowest p-stack-md rounded-xl shadow-[0px_4px_20px_rgba(0,35,102,0.08)] border border-outline-variant space-y-4">
              <a href={`tel:${item.phone}`} className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-colors text-lg">
                <span className="material-symbols-outlined">call</span> {item.phone}
              </a>
              <button className="w-full bg-[#25D366] text-[#ffffff] py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg">
                <span className="material-symbols-outlined">chat</span> WhatsApp
              </button>
              <div className="pt-4 space-y-4 border-t border-outline-variant">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div>
                    <div className="font-label-md text-on-background">Location</div>
                    <div className="text-body-md text-on-surface-variant">{item.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                  <div>
                    <div className="font-label-md text-on-background">Working Hours</div>
                    <div className="text-body-md text-on-surface-variant">{item.timing}</div>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-48 rounded-lg overflow-hidden bg-surface-container border border-outline-variant relative cursor-pointer group"
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ',' + item.location)}`, "_blank")}
              >
                <div className="absolute inset-0 jali-pattern opacity-10"></div>
                <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant p-4 text-center group-hover:bg-primary/5 transition-colors">
                  <span className="material-symbols-outlined text-4xl mb-2 text-primary">map</span>
                  <p className="text-xs font-label-md">Open in Google Maps<br />{item.location}</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </main>
    </motion.div>
  );
}

export default Servicedetails;
