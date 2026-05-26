import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AirportTransfers from './components/AirportTransfers';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import Header from './components/Header';
import InstantPickup from './components/InstantPickup';
import MainContent from './components/MainContent';
import Register from './components/Register';
import ScheduledRides from './components/ScheduledRides';
import SignIn from './components/SignIn';
import Sitemap from './components/Sitemap';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        <Header />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/instant-pickup" element={<InstantPickup />} />
            <Route path="/scheduled-rides" element={<ScheduledRides />} />
            <Route path="/airport-transfers" element={<AirportTransfers />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

