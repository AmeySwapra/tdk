import React from "react";
import Footer from "../components/common/Footer";
import Contact from "../components/Contact";
import Header from "../components/common/Header";
import { Helmet } from "react-helmet-async";
import Banner from "../components/common/Banner";
import contactBanner from "../assets/bg/contact.jpg";

import BreadCrumb from "../components/common/BreadCrumb";
import ScrollToTop from "../components/common/ScrollToTop";
import ContactInfo from "../components/common/ContactInfo";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Enpro Industries</title>
      </Helmet>
      <ScrollToTop />
      
      <Header />
      <Banner imageUrl={contactBanner} title="Contact Us" />
      <BreadCrumb currentPage={"Contact"} />
      <Contact />
      <ContactInfo/>
      <Footer />
    </>
  );
}

export default ContactPage;
