// import Header from "../component/Header";
import Herosection from "../component/Herosection";
import ServiceCategories from "../component/ServiceCategories";
import FeaturedSection from "../component/FeaturedSection";

function Home() {
  return (
    <>
      <main className="pt-1 ">
        <Herosection />
        <ServiceCategories />
        <FeaturedSection />
      </main>
    </>
  );
}

export default Home;
