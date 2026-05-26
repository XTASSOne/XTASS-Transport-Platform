import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  return (
    <main className="flex-grow pb-24 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">XTASS Site Directory</h1>
          <p className="text-lg text-gray-500 mb-8">Complete overview of every page on the XTASS platform, organised by section.</p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon sm:text-sm text-gray-900 placeholder-gray-400 shadow-sm" 
              placeholder="Search pages..." 
            />
          </div>
        </div>
      </section>

      {/* Directory Cards */}
      <section className="container mx-auto px-4 max-w-6xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Main Pages */}
          <div className="bg-white rounded border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">Main Pages</h2>
              <div className="w-12 h-0.5 bg-brand-yellow mb-6"></div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">1.</span>
                  <div>
                    <Link to="/" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Home</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">XTASS homepage with booking form and service overview</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">2.</span>
                  <div>
                    <Link to="/sitemap" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Sitemap</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Full directory of every page on the XTASS platform</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">3.</span>
                  <div>
                    <Link to="/start-reservation" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Start a Reservation</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">The main booking entry page with the full reservation form</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">4.</span>
                  <div>
                    <Link to="/manage-reservation" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Manage Reservation</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Look up and modify or cancel an existing booking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">5.</span>
                  <div>
                    <Link to="/service-areas" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Service Areas</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">View the regions, cities, and airports where XTASS operates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">6.</span>
                  <div>
                    <Link to="/pricing" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Pricing Information</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Learn about our fixed, all-inclusive pricing structure</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">7.</span>
                  <div>
                    <Link to="/safety-guidelines" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Safety Guidelines</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Review our driver vetting and vehicular inspection standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">8.</span>
                  <div>
                    <Link to="/careers" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Careers</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Join the XTASS team as a driver or corporate professional</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">9.</span>
                  <div>
                    <Link to="/press" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Press &amp; Media</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Official announcements and brand assets for journalists</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">11.</span>
                  <div>
                    <Link to="/emergency" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Emergency Hotline</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Immediate 24/7 assistance for urgent trip and security matters</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">12.</span>
                  <div>
                    <Link to="/rental-faqs" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Rental FAQs</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Frequently asked questions about car rental rates and policies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">13.</span>
                  <div>
                    <Link to="/report-issue" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Report an Issue</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Report a problem with a trip, vehicle, or booking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">14.</span>
                  <div>
                    <Link to="/lost-found" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Lost &amp; Found</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Report and track items left behind in a vehicle</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.</span>
                  <div>
                    <Link to="/terms-conditions" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Terms &amp; Conditions</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Full legal terms governing the use of the XTASS platform</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.1.</span>
                  <div>
                    <Link to="/privacy-policy" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Privacy Policy</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">How we collect, use, and protect your personal data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.2.</span>
                  <div>
                    <Link to="/cookie-policy" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Cookie Policy</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">How XTASS uses cookies to improve your digital experience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.3.</span>
                  <div>
                    <Link to="/refund-cancel-policy" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Refund &amp; Cancellation</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Transparent policies for changes and cancellations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.4.</span>
                  <div>
                    <Link to="/driver-agreement" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Driver Agreement</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Professional obligations for XTASS personnel</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.5.</span>
                  <div>
                    <Link to="/community-guidelines" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Community Guidelines</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Fostering a safe environment for drivers and passengers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.6.</span>
                  <div>
                    <Link to="/data-protection" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Data Protection Policy</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Compliance with the Ghana Data Protection Act</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.7.</span>
                  <div>
                    <Link to="/compliance-safety" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Compliance &amp; Safety Policy</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Regulatory compliance and vehicle standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.8.</span>
                  <div>
                    <Link to="/licensing-information" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Licensing Information</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Company registration and transport licensing details</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.9.</span>
                  <div>
                    <Link to="/insurance-coverage" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Insurance Coverage</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Insurance coverage for passengers and vehicles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">16.</span>
                  <div>
                    <Link to="/session-timeout" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Session Timeout</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Booking session expiry and resumption</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Vehicles & Services */}
          <div className="bg-white rounded border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">Vehicles &amp; Services</h2>
              <div className="w-12 h-0.5 bg-brand-yellow mb-6"></div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">16.</span>
                  <div>
                    <Link to="/instant-pickup" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Instant Pickup</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">On-demand transport — nearest driver dispatched immediately</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">17.</span>
                  <div>
                    <Link to="/scheduled-rides" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Scheduled Rides</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Plan and pre-book your ride for any future date and time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">18.</span>
                  <div>
                    <Link to="/airport-transfers" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Airport Transfers</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Reliable airport connections at all 6 Ghana airports</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">19.</span>
                  <div>
                    <Link to="/group-transportation" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Group Transportation</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Larger vehicles for families, events, and team travel</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">20.</span>
                  <div>
                    <Link to="/accessibility" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Accessibility Transport</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Inclusive mobility options for passengers with special needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">21.</span>
                  <div>
                    <Link to="/one-way-rental" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">One-Way Rental</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Pick up at one location, drop off at another</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">22.</span>
                  <div>
                    <Link to="/long-term-rental" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Long-Term Rental</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Weekly or monthly rental discounts with unlimited mileage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">23.</span>
                  <div>
                    <Link to="/weekend-rental" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Weekend Rental</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Off-peak weekend rental rates with flexible Sunday returns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">24.</span>
                  <div>
                    <Link to="/vehicle-fleet" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Vehicle Fleet</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Complete details and classifications of the XTASS fleet</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">25.</span>
                  <div>
                    <Link to="/vehicle-comparison" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Vehicle Comparison</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Compare specifications to choose the right vehicle</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">25.1.</span>
                  <div>
                    <Link to="/available-vehicles" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Available Vehicles</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">List of available vehicles for the selected ride type</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">25.2.</span>
                  <div>
                    <Link to="/vehicle-detail/v1" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Vehicle Detail</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Full specification sheet for a ride-hailing vehicle</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">25.3.</span>
                  <div>
                    <Link to="/rental-vehicle-detail/r1" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Rental Vehicle Detail</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Premium detail view for a Car Rental vehicle</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">25.4.</span>
                  <div>
                    <Link to="/driver-details/d1" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Driver Details</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Profile of the assigned XTASS driver and vehicle</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">25.5.</span>
                  <div>
                    <Link to="/payment-selection" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Payment Selection</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Choose payment method for immediate payment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">25.6.</span>
                  <div>
                    <Link to="/payment-processing" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Payment Processing</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Loading and success/failure states for payment</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Authentication */}
          <div className="bg-white rounded border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">Authentication</h2>
              <div className="w-12 h-0.5 bg-brand-yellow mb-6"></div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">26.</span>
                  <div>
                    <Link to="/signin" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Sign In</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Log in to your XTASS customer account</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">27.</span>
                  <div>
                    <Link to="/register" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Register</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Create a new XTASS customer account</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">28.</span>
                  <div>
                    <Link to="/forgot-password" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Forgot Password</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Reset your password via email or phone number</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">29.</span>
                  <div>
                    <Link to="/verify-otp" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">OTP Verification</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Verify your identity using a 6-digit one-time code</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">30.</span>
                  <div>
                    <Link to="/live-photo-login" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Live Photo Login</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Log in using a live selfie capture</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">31.</span>
                  <div>
                    <Link to="/post-login-verification" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Post-Login Verification</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Security interstitial after successful login</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">32.</span>
                  <div>
                    <Link to="/booking/step-1" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Booking Step 1: Trip Details</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Select trip type, location, schedule, and passenger requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">33.</span>
                  <div>
                    <Link to="/booking/step-2" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Booking Step 2: Location &amp; Schedule</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Visual confirmation of trip details</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">34.</span>
                  <div>
                    <Link to="/booking/step-3" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Booking Step 3: Choose Vehicle</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Browse and filter premium fleet options</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">35.</span>
                  <div>
                    <Link to="/booking/step-4" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Booking Step 4: Optional Extras</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Add protection coverages and equipment add-ons</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">36.</span>
                  <div>
                    <Link to="/booking/step-5" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Booking Step 5: Review &amp; Reserve</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Review details, policies, and confirm booking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">37.</span>
                  <div>
                    <Link to="/booking-confirmation" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Booking Confirmation</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Success screen with assigned booking ID and summary</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">38.</span>
                  <div>
                    <Link to="/trip-tracking" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Trip Tracking</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Real-time driver location and trip status tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">39.</span>
                  <div>
                    <Link to="/trip-receipt" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Trip Receipt</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Completed trip summary, fare breakdown, and rating prompt</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">40.</span>
                  <div>
                    <Link to="/dashboard" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Customer Dashboard</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Personalized home screen with upcoming trips and booking shortcuts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">41.</span>
                  <div>
                    <Link to="/my-bookings" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">My Bookings</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">List of all customer's bookings (Upcoming, Active, Completed, Cancelled)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">42.</span>
                  <div>
                    <Link to="/booking-detail/XTA-12345" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Booking Detail</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Full detail view of a single booking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">43.</span>
                  <div>
                    <Link to="/modify-booking/XTA-12345" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Modify Booking</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Change details of an upcoming booking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">44.</span>
                  <div>
                    <Link to="/cancel-booking/XTA-12345" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Cancel Booking</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Cancel an upcoming booking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">45.</span>
                  <div>
                    <Link to="/trip-history" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Trip History</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Chronological timeline of past completed and cancelled trips</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">46.</span>
                  <div>
                    <Link to="/account" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">My Account</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Main account management hub</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">47.</span>
                  <div>
                    <Link to="/profile-edit" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Profile Edit</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Update personal profile information</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">48.</span>
                  <div>
                    <Link to="/saved-passengers" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Saved Passengers</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Manage saved profiles for regular co-passengers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">49.</span>
                  <div>
                    <Link to="/emergency-contacts" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Emergency Contacts</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Manage up to 3 emergency contacts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">50.</span>
                  <div>
                    <Link to="/saved-payment-methods" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Saved Payment Methods</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Manage saved credit cards and mobile money accounts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">51.</span>
                  <div>
                    <Link to="/saved-locations" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Saved Locations</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Manage frequently used pickup and dropoff locations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">52.</span>
                  <div>
                    <Link to="/security-settings" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Security Settings</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Change password, enable 2FA, and manage sessions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">53.</span>
                  <div>
                    <Link to="/notification-preferences" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Notification Preferences</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Control SMS, email, and in-app alert settings</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
