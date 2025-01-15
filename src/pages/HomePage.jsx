import React from "react";
import Header from "../components/common/Header";
import { Helmet } from "react-helmet-async";
import HomeCard from "../components/HomeCard";
import ScrollToTop from "../components/common/ScrollToTop";
import Overview from "../components/Overview";
import QuoteAndVideoSection from "../components/QuoteAndVideoSection";
import CompanyNumbers from "../components/CompanyNumbers";
import ProductSections from "../components/ProductSections";
import Footer from "../components/common/Footer";
import ContactInfo from "../components/common/ContactInfo";
import EngineeringCapability from "../components/EngineeringCapability";
function HomePage() {
  return (
    <>
      <Helmet>
        <title>Homepage | Enpro Industries</title>
      </Helmet>
      <ScrollToTop />
      <Header />
      <HomeCard />
      <Overview />
      <QuoteAndVideoSection />
      <CompanyNumbers />
      <ProductSections />
      <EngineeringCapability/>
      <ContactInfo />
      <Footer />
    </>
  );
}

export default HomePage;
