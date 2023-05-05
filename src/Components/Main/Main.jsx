import { React, useEffect } from "react";
import "./main.css";
import "./Main.scss";
import img from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "Historical",
    fees: "$1500",
    description:
      "Machu Picchu is an ancient Incan city located in Peru. It was built in the 15th century and abandoned a century later during the Spanish conquest. Today it's a UNESCO World Heritage site and one of the most popular tourist destinations in South America.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Santorini",
    location: "Greece",
    grade: "Romantic",
    fees: "$800",
    description:
      "Santorini is one of the most beautiful islands in Greece. It is known for its stunning sunsets, white-washed buildings, and blue-domed churches.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Paris",
    location: "France",
    grade: "Romantic",
    fees: "$900",
    description:
      "Paris is known as the city of love. It is home to some of the most romantic landmarks in the world, such as the Eiffel Tower and the Seine River.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Venice",
    location: "Italy",
    grade: "Romantic",
    fees: "$1000",
    description:
      "Venice is one of the most romantic cities in the world. It is known for its beautiful canals, stunning architecture, and delicious food.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Bali",
    location: "Indonesia",
    grade: "Relaxing Beaches",
    fees: "$800",
    description:
      "Bali is one of the most popular travel destinations in the world. It is known for its beautiful beaches, stunning temples, and delicious food.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Tokyo",
    location: "Japan",
    grade: "Cultural Experience",
    fees: "$1200",
    description:
      "Tokyo is one of the most vibrant cities in the world. It is known for its unique culture, delicious food, and stunning architecture.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" data-aos-duration="4000" className="title">
          Most visited Places around the World
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div data-aos="fade-up" className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                  </span>

                  <span className="name">{location}</span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    Details
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
