import { Plane, Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AirportTransfers() {
  const airports = [
    { name: "Kotoka Int'l Airport", region: "Greater Accra Region" },
    { name: "Kumasi Airport", region: "Ashanti Region" },
    { name: "Tamale Airport", region: "Northern Region" },
    { name: "Takoradi Airport", region: "Western Region" },
    { name: "Wa Airport", region: "Upper West Region" },
    { name: "Sunyani Airport", region: "Bono Region" },
  ];

  return (
    <main className="flex-grow">
      {/* Service Hero */}
      <section className="relative bg-gray-900 text-white h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Airport terminal and plane" 
            className="w-full h-full object-cover opacity-40" 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80" 
          />
        </div>
        <div className="max-w-[80rem] mx-auto px-4 relative z-10 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-300">XTASS Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tight leading-tight mb-6">
              AIRPORT TRANSFERS —<br />RELIABLE CONNECTIONS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Any time, any airport. Secure your airport transfer with XTASS and enjoy complimentary flight tracking and guaranteed punctuality.
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

      {/* All 6 Airports Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">All 6 Ghana Airports</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              XTASS proudly serves all major airports across Ghana for both arrivals and departures, ensuring you have a reliable connection no matter where you fly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airports.map((airport, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-brand-maroon">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{airport.name}</h3>
                  <p className="text-brand-maroon text-sm font-medium mt-1">{airport.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Tracking feature */}
      <section className="py-24 bg-brand-maroon-dark text-white">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold italic tracking-tight mb-6">Live Flight Tracking</h2>
              <div className="w-16 h-1 bg-brand-yellow mb-8" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-yellow" /> How Flight Tracking Works
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    XTASS connects to live flight data systems. Provide your flight number when booking, and our system tracks your aircraft in real-time. If your flight is early or delayed, we automatically adjust your driver's arrival time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Check className="w-5 h-5 text-brand-yellow" /> No Action Required
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    You don't need to call or notify XTASS if your flight schedule changes. It's handled entirely automatically, ensuring your driver is waiting for you exactly when you land.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-white/5 p-8 border border-white/10 rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80" 
                alt="Flight tracking concept" 
                className="w-full h-auto object-cover grayscale mix-blend-overlay opacity-50"
              />
              <div className="text-center mt-6">
                 <p className="text-sm font-bold tracking-widest uppercase text-brand-yellow">Synchronised With Global Flight Data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Coverage */}
      <section className="py-24 bg-[#F3EDF1]">
        <div className="max-w-[80rem] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">End-to-End Connection</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            A single booking to cover your entire journey across different cities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-brand-maroon/10 text-brand-maroon rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Single Booking Efficiency</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                One booking can cover your pickup at home, drop-off at your departure airport, pickup at your arrival airport, and final delivery to your destination.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-brand-maroon/10 text-brand-maroon rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Round Trip Options</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Add return legs and schedule all intermediate transfers within the same session. Seamless travel planning without multiple disjointed bookings.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
             <Link 
              to="/" 
              className="inline-block bg-brand-maroon text-white font-bold px-10 py-4 hover:bg-brand-maroon-hover transition-colors shadow-sm"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
