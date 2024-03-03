import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Footer } from "./components/footer/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const BASE_URL = "https://kajutan-bk.onrender.com";
function App() {
  return (
    <div className="bg-neutral-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
