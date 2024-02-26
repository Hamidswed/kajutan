import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Footer } from "./components/footer/Footer";
import { About } from "./pages/About";

function App() {
  return (
    <div className="bg-neutral-800 h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
