import Herosection from "../component/Herosection";
import ServiceCategories from "../component/ServiceCategories";
import FeaturedSection from "../component/FeaturedSection";
import { motion } from "framer-motion";

const sectionFadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1, ease: "easeOut" }
};

function Home() {
  return (
    <main className="pt-1 flex flex-col gap-6 overflow-hidden">
      <motion.div {...sectionFadeIn} transition={{ duration: 1 }}>
        <Herosection />
      </motion.div>
      <motion.div {...sectionFadeIn}>
        <ServiceCategories />
      </motion.div>
      <motion.div {...sectionFadeIn}>
        <FeaturedSection />
      </motion.div>
    </main>
  );
}

export default Home;
