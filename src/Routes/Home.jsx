import React from "react";
import Navbar from "../Components/Navbar/Navbar";

import Homes from "../Components/Home/Homes";
import MainFooter from "../Components/MainFooter/MainFooter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homes />
      <MainFooter />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
