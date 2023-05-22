import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import video from "../../assets/video1.mp4";
import "./Home.scss";
import { GrLocation } from "react-icons/gr";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import { FiFacebook, FiSearch } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import PriceInput from "./PriceInput";

import Aos from "aos";
import "aos/dist/aos.css";

const Homes = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [countryNames, setCountryNames] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDays, setSelectedDays] = useState("");
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryNames = response.data.map(
          (country) => country.name.common
        );
        setCountryNames(countryNames);
      })
      .catch((error) => console.log(error));
  }, []);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : countryNames.filter(
          (country) =>
            country.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleDaysChange = (e) => {
    setSelectedDays(e.target.value);
  };

  useEffect(() => {
    setIsSearchEnabled(
      value !== "" && selectedDate !== "" && selectedDays !== ""
    );
  }, [value, selectedDate, selectedDays]);

  useEffect(() => {
    setIsSearchButtonDisabled(!(value && selectedDate && selectedDays));
  }, [value, selectedDate, selectedDays]);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <h1 data-aos="slide-up" className="homeTitle">
            Vacay Mode ON{" "}
          </h1>
          <span data-aos="fade-up" className="smallText">
            Browse through our Packages
          </span>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Tell us your Destination</label>
            <div className="input flex">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={({ value }) =>
                  setSuggestions(getSuggestions(value))
                }
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={(suggestion) => suggestion}
                renderSuggestion={renderSuggestion}
                inputProps={{
                  placeholder: "Type a country name",
                  value,
                  onChange: (_, { newValue }) => setValue(newValue),
                }}
              />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Travel Date</label>
            <div className="input flex">
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
          </div>

          <div className="daysInput">
            <label htmlFor="date">Number of Days</label>
            <div className="input flex">
              <input
                type="number"
                value={selectedDays}
                onChange={handleDaysChange}
              />
            </div>
          </div>

          <div className="priceInput">
            {/* <div className="label_total flex">
              <label htmlFor="price">Your Budget &nbsp;</label>
              <h3 className="total">$5000</h3>
            </div> */}
            {/* <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div> */}
            <PriceInput onPriceChange={handlePriceChange} />
          </div>
          <div className="searchOptions flex">
            {isSearchButtonDisabled ? (
              <div className="disabledSearch">Please fill in the details.</div>
            ) : (
              <Link to="/search">
                <div className="searchOptions flex">
                  <FiSearch className="icon" />
                  <span>Search</span>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homes;
