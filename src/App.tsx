import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AirportTransfers from './components/AirportTransfers';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import GroupTransportation from './components/GroupTransportation';
import Header from './components/Header';
import InstantPickup from './components/InstantPickup';
import LongTermRental from './components/LongTermRental';
import MainContent from './components/MainContent';
import OneWayRental from './components/OneWayRental';
import VehicleFleet from './components/VehicleFleet';
import WeekendRental from './components/WeekendRental';
import StartReservation from './components/StartReservation';
import ManageReservation from './components/ManageReservation';
import ServiceAreas from './components/ServiceAreas';
import PricingInformation from './components/PricingInformation';
import SafetyGuidelines from './components/SafetyGuidelines';
import AccessibilityServices from './components/AccessibilityServices';
import Careers from './components/Careers';
import PressMedia from './components/PressMedia';
import EmergencyHotline from './components/EmergencyHotline';
import RentalFaqs from './components/RentalFaqs';
import VehicleComparison from './components/VehicleComparison';
import ReportIssue from './components/ReportIssue';
import LostFound from './components/LostFound';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import RefundCancelPolicy from './components/RefundCancelPolicy';
import DriverAgreement from './components/DriverAgreement';
import CommunityGuidelines from './components/CommunityGuidelines';
import DataProtectionPolicy from './components/DataProtectionPolicy';
import ComplianceSafetyPolicy from './components/ComplianceSafetyPolicy';
import LicensingInformation from './components/LicensingInformation';
import InsuranceCoverage from './components/InsuranceCoverage';
import SessionTimeout from './components/SessionTimeout';
import Register from './components/Register';
import ScheduledRides from './components/ScheduledRides';
import SignIn from './components/SignIn';
import OtpVerification from './components/OtpVerification';
import LivePhotoLogin from './components/LivePhotoLogin';
import PostLoginVerification from './components/PostLoginVerification';
import BookingStep1 from './components/booking/BookingStep1';
import BookingStep2 from './components/booking/BookingStep2';
import BookingStep3 from './components/booking/BookingStep3';
import BookingStep4 from './components/booking/BookingStep4';
import BookingStep5 from './components/booking/BookingStep5';
import BookingConfirmation from './components/BookingConfirmation';
import TripTracking from './components/TripTracking';
import TripReceipt from './components/TripReceipt';
import CustomerDashboard from './components/CustomerDashboard';
import MyBookings from './components/MyBookings';
import BookingDetail from './components/BookingDetail';
import ModifyBooking from './components/ModifyBooking';
import CancelBooking from './components/CancelBooking';
import TripHistory from './components/TripHistory';
import MyAccountDashboard from './components/MyAccountDashboard';
import ProfileEdit from './components/ProfileEdit';
import SavedPassengers from './components/SavedPassengers';
import EmergencyContacts from './components/EmergencyContacts';
import SavedPaymentMethods from './components/SavedPaymentMethods';
import SavedLocations from './components/SavedLocations';
import SecuritySettings from './components/SecuritySettings';
import NotificationPreferences from './components/NotificationPreferences';
import AvailableVehicles from './components/AvailableVehicles';
import VehicleDetail from './components/VehicleDetail';
import DriverDetails from './components/DriverDetails';
import RentalVehicleDetail from './components/RentalVehicleDetail';
import PaymentSelection from './components/PaymentSelection';
import PaymentProcessing from './components/PaymentProcessing';
import Sitemap from './components/Sitemap';
import SpecialNeeds from './components/SpecialNeeds';
import HelpSupport from './components/HelpSupport';
import RecentlyViewed from './components/RecentlyViewed';
import RentalConfirmation from './components/RentalConfirmation';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isSessionTimeout = location.pathname === '/session-timeout';
  const isPostLoginVerification = location.pathname === '/post-login-verification';

  if (isSessionTimeout || isPostLoginVerification) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/recently-viewed" element={<RecentlyViewed />} />
          <Route path="/rental-confirmation" element={<RentalConfirmation />} />
          <Route path="/instant-pickup" element={<InstantPickup />} />
          <Route path="/scheduled-rides" element={<ScheduledRides />} />
          <Route path="/airport-transfers" element={<AirportTransfers />} />
          <Route path="/group-transportation" element={<GroupTransportation />} />
          <Route path="/special-needs-transport" element={<SpecialNeeds />} />
          <Route path="/one-way-rental" element={<OneWayRental />} />
          <Route path="/long-term-rental" element={<LongTermRental />} />
          <Route path="/weekend-rental" element={<WeekendRental />} />
          <Route path="/vehicle-fleet" element={<VehicleFleet />} />
          <Route path="/start-reservation" element={<StartReservation />} />
          <Route path="/manage-reservation" element={<ManageReservation />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/pricing" element={<PricingInformation />} />
          <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
          <Route path="/accessibility" element={<AccessibilityServices />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<PressMedia />} />
          <Route path="/emergency" element={<EmergencyHotline />} />
          <Route path="/rental-faqs" element={<RentalFaqs />} />
          <Route path="/vehicle-comparison" element={<VehicleComparison />} />
          <Route path="/report-issue" element={<ReportIssue />} />
          <Route path="/lost-found" element={<LostFound />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/refund-cancel-policy" element={<RefundCancelPolicy />} />
          <Route path="/driver-agreement" element={<DriverAgreement />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
          <Route path="/data-protection" element={<DataProtectionPolicy />} />
          <Route path="/compliance-safety" element={<ComplianceSafetyPolicy />} />
          <Route path="/licensing-information" element={<LicensingInformation />} />
          <Route path="/insurance-coverage" element={<InsuranceCoverage />} />
          <Route path="/session-timeout" element={<SessionTimeout />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/live-photo-login" element={<LivePhotoLogin />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/post-login-verification" element={<PostLoginVerification />} />
          <Route path="/booking/step-1" element={<BookingStep1 />} />
          <Route path="/booking/step-2" element={<BookingStep2 />} />
          <Route path="/booking/step-3" element={<BookingStep3 />} />
          <Route path="/booking/step-4" element={<BookingStep4 />} />
          <Route path="/booking/step-5" element={<BookingStep5 />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/trip-tracking" element={<TripTracking />} />
          <Route path="/trip-receipt" element={<TripReceipt />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/booking-detail/:id" element={<BookingDetail />} />
          <Route path="/modify-booking/:id" element={<ModifyBooking />} />
          <Route path="/cancel-booking/:id" element={<CancelBooking />} />
          <Route path="/trip-history" element={<TripHistory />} />
          <Route path="/account" element={<MyAccountDashboard />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
          <Route path="/saved-passengers" element={<SavedPassengers />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/saved-payment-methods" element={<SavedPaymentMethods />} />
          <Route path="/saved-locations" element={<SavedLocations />} />
          <Route path="/security-settings" element={<SecuritySettings />} />
          <Route path="/notification-preferences" element={<NotificationPreferences />} />
          <Route path="/available-vehicles" element={<AvailableVehicles />} />
          <Route path="/vehicle-detail/:id" element={<VehicleDetail />} />
          <Route path="/driver-details/:id" element={<DriverDetails />} />
          <Route path="/rental-vehicle-detail/:id" element={<RentalVehicleDetail />} />
          <Route path="/payment-selection" element={<PaymentSelection />} />
          <Route path="/payment-processing" element={<PaymentProcessing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

