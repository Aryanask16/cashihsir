import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/comps/FrameComponent1";
import Home from "./components/comps/Home";
import GST from "./components/comps/GST";
import Team from "./components/comps/Team";
import Services from "./components/comps/Services";
import Navbar from "./components/comps/Navbar";
import Footer from "./components/comps/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gst" element={<GST />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
