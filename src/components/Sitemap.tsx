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
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">7.</span>
                  <div>
                    <Link to="/instant-pickup" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Instant Pickup</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">On-demand transport — nearest driver dispatched immediately</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">8.</span>
                  <div>
                    <Link to="/scheduled-rides" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Scheduled Rides</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Plan and pre-book your ride for any future date and time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">9.</span>
                  <div>
                    <Link to="/airport-transfers" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Airport Transfers</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Reliable airport connections at all 6 Ghana airports</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">10.</span>
                  <div>
                    <Link to="/group-transportation" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Group Transportation</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Larger vehicles for families, events, and team travel</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">11.</span>
                  <div>
                    <Link to="/special-needs-transport" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Special Needs Transport</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Accessible transport with wheelchair and child seat options</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">12.</span>
                  <div>
                    <Link to="/one-way-rental" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">One-Way Rental</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Pick up at one location, drop off at another</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">13.</span>
                  <div>
                    <Link to="/long-term-rental" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Long-Term Rental</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Weekly or monthly rental discounts with unlimited mileage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">14.</span>
                  <div>
                    <Link to="/weekend-rental" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Weekend Rental</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Off-peak weekend rental rates with flexible Sunday returns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm">15.</span>
                  <div>
                    <Link to="/vehicle-fleet" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Vehicle Fleet</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Complete details and classifications of the XTASS fleet</p>
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
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">16.</span>
                  <div>
                    <Link to="/signin" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Sign In</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Log in to your XTASS customer account</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">17.</span>
                  <div>
                    <Link to="/register" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Register</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Create a new XTASS customer account</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 font-medium mr-3 mt-0.5 text-sm">18.</span>
                  <div>
                    <Link to="/forgot-password" className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">Forgot Password</Link>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">Reset your password via email or phone number</p>
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
