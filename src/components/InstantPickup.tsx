import { Check } from 'lucide-react';

export default function InstantPickup() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            alt="People in car" 
            className="w-full h-full object-cover opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBntMbBvdlwEYUBhG39jkty0jR3EUitf6lAvLBttvCqz9wlMsfVxWEgyqc_inMaDzJBERZYMvomTN_SNACNffCZ8A8eQU2NeqRp51teACHtYquudglKAN4v0Y38UN4l6eomAe3S8mg438iJN7mGMNufU8xuO_DUKlJGdRag3S9hLFmV8m2nS1_RFve_oRB5lDnw5uS2VOUKIdwHDDBrphGcZ9pAAJh37VnmJGBrksQBI5DkDJW0Kx1_3vDuzf3uxrQjZ2Suwmy8FDk" 
          />
        </div>
        <div className="max-w-[80rem] mx-auto px-4 relative z-10 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-300">XTASS Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tight leading-tight mb-6">
              INSTANT PICKUP —<br />ON-DEMAND TRANSPORT
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Book immediately — the nearest available XTASS driver is dispatched straight to your location.
            </p>
            <button className="bg-brand-yellow text-gray-900 font-bold text-sm px-8 py-3 hover:bg-brand-yellow-hover transition-colors shadow-sm">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-brand-maroon mb-6">How Instant Pickup Works</h2>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              Open the XTASS platform, select <strong>Instant Ride</strong>, confirm your pickup location, and we dispatch the nearest available driver immediately. No scheduling required — just tap and go.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6">Best Suited For</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Spontaneous travel and last-minute plan changes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Urgent pickups when every minute counts</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Short city trips across Accra and other cities</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Airport runs when you need a vehicle right now</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Level Section */}
      <section className="py-24 bg-[#F3EDF1]">
        <div className="max-w-[80rem] mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-maroon mb-12 text-center md:text-left">Choose Your Service Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Premium Card */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-maroon mb-4">Premium</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Luxury vehicles with professional drivers, complimentary water, and premium in-car experience.</p>
            </div>
            
            {/* Business Card */}
            <div className="bg-brand-maroon-dark p-8 shadow-sm text-white">
              <h3 className="text-xl font-bold mb-4 text-brand-yellow">Business</h3>
              <p className="text-gray-200 font-medium leading-relaxed">Executive sedans and SUVs for corporate travel. Quiet, comfortable, and punctual.</p>
            </div>
            
            {/* Economy Card */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-maroon mb-4">Economy</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Affordable and reliable transport — the smart choice for everyday journeys.</p>
            </div>
            
            {/* Basic Card */}
            <div className="bg-brand-maroon-dark p-8 shadow-sm text-white">
              <h3 className="text-xl font-bold mb-4 text-brand-yellow">Basic</h3>
              <p className="text-gray-200 font-medium leading-relaxed">Budget-friendly shared rides where passengers traveling the same direction ride together.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-maroon text-center border-b-[8px] border-brand-maroon-dark">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Ride?</h2>
          <p className="text-white/80 mb-10 text-lg font-medium">Tap once, ride in minutes. Your driver is already nearby.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-brand-yellow text-gray-900 font-bold px-8 py-3.5 hover:bg-brand-yellow-hover transition-colors w-full sm:w-auto shadow-sm tracking-wide">
              Book Now
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-3.5 hover:bg-white hover:text-brand-maroon transition-colors w-full sm:w-auto shadow-sm tracking-wide">
              Got Questions?
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
