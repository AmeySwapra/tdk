import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import CareerPage from "./pages/CareerPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import SaudiEnproPage from "./pages/SaudiEnproPage";
import EngineerdSkidPage from "./pages/EngineerdSkidPage";
import RenewablesPage from "./pages/RenewablesPage";
import ProcessEquipmentPage from "./pages/ProcessEquipmentPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/enpro-saudi-arabia" element={<SaudiEnproPage />} />
          <Route path="/engineered-skid-system" element={<EngineerdSkidPage />} />
          <Route path="/renewables" element={<RenewablesPage />} />
          <Route path="/process-system" element={<ProcessEquipmentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
