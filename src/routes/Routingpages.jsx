import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Directorysubservices from "../pages/Directorysubservices";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Servicedetails from "../pages/Servicedetails";

function Routingpages() {
  return (
    <div>
      <div className="bg-surface text-on-surface font-body-md">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<Directorysubservices />} />
          <Route path="/details/:category/:id" element={<Servicedetails />} />
          <Route path="/:id" element={<Directorysubservices />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default Routingpages;
