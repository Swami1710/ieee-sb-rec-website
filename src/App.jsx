import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import RegisterEvent from "./pages/RegisterEvent";
import RegistrationsAdmin from "./pages/RegistrationsAdmin";

function ProtectedRoute({ children }) {
  const isAdminLoggedIn =
    localStorage.getItem("adminLoggedIn") === "true";

  return isAdminLoggedIn ? children : <Navigate to="/admin-login" />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#030712] text-white">
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register/:eventId" element={<RegisterEvent />} />

          {/* Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/registrations"
            element={
              <ProtectedRoute>
                <RegistrationsAdmin />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;