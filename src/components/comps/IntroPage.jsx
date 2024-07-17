import "../css/IntroPage.css";
import heroImg from "../../assets/heroImg.png";
import AuroraBackgroundDemo from "./HeroTextBg";

export default function IntroPage() {
  return (
    <div className="Intro-cont w-full flex flex-wrap justify-center items-center mt-0 pt-24 mb-20">
      <AuroraBackgroundDemo />
    </div>
  );
}
