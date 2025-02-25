import Home from "./Mainpage/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Mainpage/Dashboard";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Travelguides from "./Pages/Travelguides";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="travel" element={<Travelguides />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
