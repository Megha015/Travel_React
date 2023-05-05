import { React, useState } from "react";
// import "./navbar.css";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };
  return (
    <div>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <Link to="/" className="logo flex">
              <h1>
                <MdOutlineTravelExplore className="icon" />
                ABC Travel.
              </h1>
            </Link>
          </div>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/" className="navLink">
                  Home
                </Link>
              </li>
              <li className="navItem">
                <Link to="/packages" className="navLink">
                  Packages
                </Link>
              </li>
              <li className="navItem">
                <Link to="/about" className="navLink">
                  About
                </Link>
              </li>
              {/* <li className="navItem">
                <Link to="/news" className="navLink">
                  News
                </Link>
              </li> */}
              <li className="navItem">
                <Link to="/contact" className="navLink">
                  Contact
                </Link>
              </li>

              <button className="btn">
                <Link to="/">Book Now</Link>
              </button>
            </ul>
            <div onClick={removeNav} className="closeNavbar">
              <AiOutlineCloseCircle className="icon"></AiOutlineCloseCircle>
            </div>
          </div>
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"></TbGridDots>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;
