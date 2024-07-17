import "../css/Team.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TeamGrid from "./TeamGrid";

export default function Team() {
  return (
    <>
      {/* <Navbar /> */}
      <div id="team">
        <div className="Team-cont w-full flex flex-col justify-center items-start mt-16">
          <div className="head mt-20 mb-24 w-full px-8 font-bold flex justify-center items-center">
            <div className="mr-4">Meet</div>
            <div className="mr-4">Our</div>
            <div className="mr-4">Team</div>
          </div>
          <div className="flex justify-around items-center flex-wrap w-full mx-auto">
            <TeamGrid />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
