import { React, useEffect } from "react";
import "./footer.css";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaTripadvisor } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import video2 from "../../assets/video2.mp4";
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              {/* <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a> */}
              <Link to="/" className="logo flex">
                <h1>
                  <MdOutlineTravelExplore className="icon" />
                  ABC Travel.
                </h1>
              </Link>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              <p>
                Discover new adventures and create lifelong memories with Us.
              </p>

              <p>
                {" "}
                Make every trip unforgettable with Us as your travel companion.
              </p>
              <p> Travel the world with ease and confidence with Us.</p>
            </div>
            <div data-aos="flip-right" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-out"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            <div
              data-aos="fade-out"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR Partners</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentals
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tripadvisor
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                airbnb
              </li>
            </div>

            <div
              data-aos="fade-out"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">Last Minute</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Paris
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Sydney
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tokyo
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agra
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Thailand
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>ABC Travel Site</small>
            <small>Copyrights Reserverd</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
