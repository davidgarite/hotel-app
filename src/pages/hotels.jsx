import React from "react";
import Nav from "../components/nav";
import HotelNav from "../components/hotel-nav";
import Hotels from "../components/hotels";
import Ctas from "../components/ctas";
import Footer from "../components/footer";

const HotelsPage = () => {
  return (
    <>
      <Nav />
      <HotelNav />
      <Hotels />
      <Ctas />
      <Footer />
    </>
  );
};

export default HotelsPage;
