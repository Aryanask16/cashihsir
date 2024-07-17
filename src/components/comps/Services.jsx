import CardHoverEffectDemo from "./Hover-effect";
import "../css/Team.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Services() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="Services-cont Team-cont flex flex-col flex-wrap justify-center items-center">
        <div
          className="mt-44 head text-4xl font-bold flex font1 flex-wrap items-center justify-center px-8"
          id="services"
        >
          <div className="mr-4 mq700:ml-[-34vh] mq700:text-[6vh]">Our</div>
          <div className="mq700:text-[6vh]">Services</div>
        </div>
        <CardHoverEffectDemo />
      </div>
      {/* <Footer /> */}
    </>
  );
}
