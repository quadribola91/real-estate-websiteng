import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import RentPage from './components/RentPage'; // RentPage Component
import BuyLeasePage from './components/BuyLeasePage'; // BuyLeasePage Component
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesAdminPage from './components/ServicesAdminPage'; // Import ServicesAdminPage
import BookingAdminPage from './components/BookingAdminPage'; // Import BookingAdminPage

const App = () => {
  return (
    <Router> {/* Wrap everything in Router for routing */}
      <div>
        <Navbar />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page (main) */}
          <Route path="/services" element={<Services />} /> {/* Services Page */}
          <Route path="/rent" element={<RentPage />} /> {/* Rent Details Page */}
          <Route path="/buy-lease" element={<BuyLeasePage />} /> {/* Buy/Lease Details Page */}
          <Route path="/book-inspection" element={<BookingForm />} /> {/* Booking Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
          <Route path="/servicesAdmin" element={<ServicesAdminPage />} /> {/* Services Admin Page */}
          <Route path="/bookingsAdmin" element={<BookingAdminPage />} /> {/* Booking Admin Page */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
