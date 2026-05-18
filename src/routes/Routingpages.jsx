import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import { useLoading } from "../context/LoadingContext";
import Herosection from "../component/Herosection";

// Lazy loading pages
const Home = lazy(() => import("../pages/Home"));
const Directorysubservices = lazy(
  () => import("../pages/Directorysubservices"),
);
const Servicedetails = lazy(() => import("../pages/Servicedetails"));
const Helpsection = lazy(() => import("../pages/Helpsection"));
function Routingpages() {
  const { isLoading } = useLoading();

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {isLoading && <Loader />}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/directory" element={<Directorysubservices />} /> */}
          <Route path="/details/:category/:id" element={<Servicedetails />} />
          <Route path="/:id" element={<Directorysubservices />} />
          <Route path="/help" element={<Helpsection />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default Routingpages;
