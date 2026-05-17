import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

// Lazy loading pages
const Home = lazy(() => import("../pages/Home"));
const Directorysubservices = lazy(() => import("../pages/Directorysubservices"));
const Servicedetails = lazy(() => import("../pages/Servicedetails"));

function Routingpages() {
  return (
    <div className="bg-surface text-on-surface font-body-md">
      <Header />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-surface">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-on-surface-variant font-label-md animate-pulse">SikarCity: Discovering the heart of Shekhawati...</p>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/directory" element={<Directorysubservices />} /> */}
          <Route path="/details/:category/:id" element={<Servicedetails />} />
          <Route path="/:id" element={<Directorysubservices />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default Routingpages;
