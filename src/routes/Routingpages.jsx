import { Suspense, lazy } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import { useLoading } from "../context/LoadingContext";
import Herosection from "../component/Herosection";
import NotFound from "../pages/NotFound";

// Lazy loading pages
const Home = lazy(() => import("../pages/Home"));
const Directorysubservices = lazy(
  () => import("../pages/Directorysubservices"),
);
const Servicedetails = lazy(() => import("../pages/Servicedetails"));
const Helpsection = lazy(() => import("../pages/Helpsection"));

// Professional Layout Component
const MainLayout = () => {
  const { isLoading } = useLoading();
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {isLoading && <Loader />}
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

function Routingpages() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/directory" element={<Directorysubservices />} /> */}
        {/* <Route path="/details/:category/:id" element={<Servicedetails />} /> */}
        <Route path="/:id" element={<Directorysubservices />} />
        <Route path="/help" element={<Helpsection />} />
      </Route>

      {/* Isolated 404 Route - No Header/Footer */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routingpages;
