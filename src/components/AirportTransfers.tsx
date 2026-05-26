import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AirportTransfers() {
  const airports = [
    { name: "Kotoka Int'l Airport", region: "Greater Accra" },
    { name: "Kumasi Airport", region: "Ashanti Region" },
    { name: "Tamale Airport", region: "Northern Region" },
    { name: "Takoradi Airport", region: "Western Region" },
    { name: "Wa Airport", region: "Upper West Region" },
    { name: "Sunyani Airport", region: "Bono Region" },
  ];

  const heroStyle = {
    backgroundImage: 'linear-gradient(to right, rgba(139, 19, 49, 0.9) 0%, rgba(139, 19, 49, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDrl8Bs2PP1Ads-XVGGKDt_tbHmHYCvY8xaqYsvWiFonpk1rcOlLT9xj--HMpRu3x2RSdgk0erDwn0ZvClTIH2LZcfltkK581xaw78l5suG1Kqkl6cUBEPNI-z6QgpHuH4Y5bariuA1Yrsoo0BObvEq9F4mOqRPyhMQQ_XwsCxkWGbJpqQr9bdpdbgGo2Mw97Ggufh9h6BROX0-bm1bRZOcWRl8LTJQaulU0mBHC_K3FqpgPkdK9RzgJxgzYToOApOH4pqhXIHJwA")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <main className="flex-grow">
      {/* Service Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden" style={heroStyle}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 text-white">
          <div className="max-w-2xl">
            <p className="uppercase tracking-widest text-sm font-semibold mb-2 opacity-90">XTASS Services</p>
            <h1 
              className="text-5xl md:text-6xl font-black italic mb-6 leading-tight uppercase bg-white/20 inline-block px-2 text-transparent bg-clip-text" 
              style={{ color: 'rgba(255,255,255,0.9)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Airport Transfers —<br />
              <span className="text-white">Reliable Connections</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Any time, any airport, flight tracking included. XTASS gets you there — and back.
            </p>
            <Link 
              to="/" 
              className="inline-block bg-brand-yellow text-gray-900 font-bold text-sm px-8 py-3.5 hover:bg-brand-yellow-hover transition duration-300 shadow-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Airports We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">Airports We Serve</h2>
            <p className="text-gray-600 text-lg">XTASS provides transfers at all six major Ghana airports — covering both arrivals and departures across the country.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airports.map((airport, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-brand-maroon text-lg mb-1">{airport.name}</h3>
                <p className="text-gray-500 text-sm">{airport.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automatic Flight Tracking Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">Automatic Flight Tracking</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              XTASS connects to live flight data and automatically monitors your flight status. If your flight is early or delayed, the driver's pickup time is adjusted — no action required from you.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-maroon">
              <h3 className="text-xl font-bold text-brand-maroon mb-2">Live Flight Monitoring</h3>
              <p className="text-gray-600">We track your flight in real time so your driver is always synced with your arrival.</p>
            </div>
            <div className="bg-brand-maroon-dark text-white p-8 rounded-sm shadow-sm">
              <h3 className="text-xl font-bold text-brand-yellow mb-2">No Action Required</h3>
              <p className="text-white/90">You don't need to notify XTASS of changes. Our system handles it automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Coverage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-brand-maroon mb-4">End-to-End Coverage</h2>
          <p className="text-gray-600 text-lg mb-8">One booking can cover all four legs of your journey:</p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <Check className="w-4 h-4 text-brand-yellow mt-1.5 mr-3 flex-shrink-0" />
              <span>Pickup at home → drop-off at your departure airport</span>
            </li>
            <li className="flex items-start">
              <Check className="w-4 h-4 text-brand-yellow mt-1.5 mr-3 flex-shrink-0" />
              <span>Pickup at your arrival airport → delivery to your destination</span>
            </li>
            <li className="flex items-start">
              <Check className="w-4 h-4 text-brand-yellow mt-1.5 mr-3 flex-shrink-0" />
              <span>Return leg booked in the same session</span>
            </li>
            <li className="flex items-start">
              <Check className="w-4 h-4 text-brand-yellow mt-1.5 mr-3 flex-shrink-0" />
              <span>Available in both your home city and your destination city</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-maroon text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Book Your Airport Transfer</h2>
          <p className="text-white/80 text-lg mb-8">Stress-free airport transport, every time.</p>
          <Link 
            to="/" 
            className="inline-block bg-brand-yellow text-gray-900 font-bold text-sm px-10 py-3.5 hover:bg-brand-yellow-hover transition duration-300 shadow-sm"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
