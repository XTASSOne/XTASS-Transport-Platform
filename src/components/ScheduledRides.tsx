import { Check, Calendar, Clock, Bell, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ScheduledRides() {
  return (
    <main className="flex-grow">
      {/* Service Hero */}
      <section className="relative bg-gray-900 text-white h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Person checking watch while waiting for a ride" 
            className="w-full h-full object-cover opacity-40" 
            src="https://images.unsplash.com/photo-1596489370845-a764d99c37ae?auto=format&fit=crop&q=80" 
          />
        </div>
        <div className="max-w-[80rem] mx-auto px-4 relative z-10 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-300">XTASS Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tight leading-tight mb-6">
              SCHEDULED RIDES —<br />PLAN AHEAD
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Book your ride in advance. Choose your exact pickup time, date, and destination, and we'll ensure a driver is waiting for you when you need it.
            </p>
            <Link 
              to="/" 
              className="inline-block bg-brand-yellow text-gray-900 font-bold text-sm px-8 py-3.5 hover:bg-brand-yellow-hover transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-brand-maroon mb-6">How Scheduled Rides Work</h2>
            
            <div className="space-y-8 mb-12 border-l-2 border-brand-yellow pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[35px] top-0 w-4 h-4 rounded-full border-4 border-white inset-0 bg-brand-yellow z-10 top-1"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Advance Booking</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Select your desired date and time in the future. Enter your pickup and drop-off locations to secure your vehicle. Your driver will be confirmed 24 hours before your scheduled pickup time.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[35px] top-0 w-4 h-4 rounded-full border-4 border-white inset-0 bg-brand-yellow z-10 top-1"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Reminder Notifications</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  You'll receive a reminder notification the day before your journey, along with your confirmed driver's details and vehicle information so you know exactly who to look out for.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-maroon" />
              Best Suited For
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3 bg-gray-50 p-4 rounded border border-gray-100">
                <Check className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Airport Drop-offs</span>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 p-4 rounded border border-gray-100">
                <Check className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Important Business Meetings</span>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 p-4 rounded border border-gray-100">
                <Check className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Medical Appointments</span>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 p-4 rounded border border-gray-100">
                <Check className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Early-Morning or Late-Night Journeys</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F3EDF1]">
        <div className="max-w-[80rem] mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-maroon mb-12 text-center md:text-left">Benefits of Booking Ahead</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-maroon/10 text-brand-maroon rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guaranteed Availability</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Booking ahead secures your vehicle for the chosen time, ensuring you're never left waiting when availability is tight.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-maroon/10 text-brand-maroon rounded-full flex items-center justify-center mb-6">
                <Bell className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Peace of Mind</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Relax knowing that your transport is sorted. We provide your driver's contact and vehicle details well in advance.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-maroon/10 text-brand-maroon rounded-full flex items-center justify-center mb-6">
                <Plane className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flight Tracking</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                For airport pickups, we automatically monitor your flight status and adjust your pickup time if your flight is delayed or early.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-maroon text-center border-b-[8px] border-brand-maroon-dark">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Schedule?</h2>
          <p className="text-white/80 mb-10 text-lg font-medium">Book ahead to ensure a safe and reliable ride for your important events.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/" 
              className="bg-brand-yellow text-gray-900 font-bold px-8 py-3.5 hover:bg-brand-yellow-hover transition-colors w-full sm:w-auto shadow-sm tracking-wide"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
