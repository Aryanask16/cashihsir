import React from "react";
import Navbar from "./Navbar";
import IntroPage from "./IntroPage";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Commit from "./Commit";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <IntroPage />
      <About />
      <Services />
      <Team />
      <Commit />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
