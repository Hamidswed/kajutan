import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Footer } from "./components/footer/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Matsal } from "./components/menu/Matsal";
import { NotFound } from "./components/notfound/NotFound";
import { MenuList } from "./components/menu/MenuList";
import LoginUser from "./pages/LoginUser";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/HOC/ProtectedRoute";
import Admin from "./pages/Admin";
import AdminPanel from "./components/admin/AdminPanel";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="bg-neutral-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />}>
            <Route index element={<Navigate to="takeaway" replace />} />
            <Route path="takeaway" element={<MenuList />} />
            <Route path="matsal" element={<Matsal />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
