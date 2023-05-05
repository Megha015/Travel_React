import { React, useEffect } from "react";
import "./About.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Abouts = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="main">
      <h2 data-aos="fade-right" data-aos-duration="2000" className="text0">
        About Us
      </h2>
      <div className="para">
        <p data-aos="fade-right" data-aos-duration="4000" className="text2">
          Welcome to our travel website! We're passionate about helping people
          explore the world and create unforgettable experiences. Our website
          offers a wide range of travel resources, including destination guides,
          travel tips, and booking tools.
        </p>
        <p data-aos="fade-right" data-aos-duration="5000" className="text1">
          At our company, we believe that travel should be accessible to
          everyone, regardless of budget or travel style. Whether you're looking
          for luxury accommodations or backpacker hostels, we've got you
          covered.
        </p>
        <p data-aos="fade-right" data-aos-duration="6000" className="text2">
          We're also committed to sustainable travel practices and promoting
          responsible tourism. We believe that travel can be a force for good,
          and we strive to create positive impact in the communities we visit.
        </p>
        <p data-aos="fade-right" data-aos-duration="7000" className="text1">
          Thank you for choosing our website for your travel needs. We hope to
          inspire and guide you on your next adventure!
        </p>
      </div>
    </div>
  );
};

export default Abouts;
