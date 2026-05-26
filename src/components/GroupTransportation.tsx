import { Users, Building2, Map, CalendarHeart, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GroupTransportation() {
  const heroStyle = {
    backgroundImage: 'linear-gradient(to right, rgba(139, 19, 49, 0.9) 0%, rgba(139, 19, 49, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX3toRGSRZrTnfFlT8NYANeRVKghwK06f9wqUnUzUFApapgRjnmwnDJ4UDUEzyualkG2vdiRw4tqcSXreAcQ8gmU8vtfL2lu4U2Gv6-AEJNgaYzH9CMvxzFlxuQP6uL9-AcQ-8SVHAmmkZyoLR85bTgrPjg_Rvo_iT243mdClfjk8jeC5154smyKF0OxZArhii7fe8ou7M3OgQcJ8AtjZhG7FwSLF5aoaMRZuUfTcgruc4q2be3fYcKA8efdu6D0IWM73TVQqFTh4")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <main className="flex-grow">
      {/* Service Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden" style={heroStyle}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 text-white">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-sm font-semibold mb-2 opacity-90">XTASS Services</p>
            <h1 
              className="text-5xl md:text-6xl font-black italic mb-6 leading-tight uppercase bg-white/20 inline-block px-2 text-transparent bg-clip-text" 
              style={{ color: 'rgba(255,255,255,0.9)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Group Transportation —<br />
              <span className="text-white">Everyone Travels Together</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Larger vehicles, flexible coordination, and comfortable group travel for any occasion.
            </p>
            <Link 
              to="/" 
              className="inline-block bg-brand-yellow text-gray-900 font-bold text-sm px-8 py-3.5 hover:bg-brand-yellow-hover transition duration-300 shadow-sm"
            >
              Book Group Ride
            </Link>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-maroon mb-12">Five Occasions We Serve</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Family Travel &amp; Airport Pickups</h3>
                <p className="text-gray-600">Large vehicles for the whole family — luggage, car seats, and all.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Group Team Transfers</h3>
                <p className="text-gray-600">Coordinate multi-pickup group transfers for your team with one booking.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Conference &amp; Event Delegates</h3>
                <p className="text-gray-600">Reliable group transport for business events, conferences, and galas.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center font-bold">
                  <Map className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tour Groups &amp; Sightseeing</h3>
                <p className="text-gray-600">Comfortable, air-conditioned vehicles for tourism and day trips across Ghana.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center font-bold">
                  <CalendarHeart className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weddings &amp; Special Occasions</h3>
                <p className="text-gray-600">Elegant transport coordination for weddings, graduations, and celebrations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-maroon mb-10">Vehicle Options for Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-maroon mb-3">Vans &amp; Minivans</h3>
              <p className="text-gray-600 leading-relaxed">
                Seats 5–8 passengers comfortably with ample luggage space. Ideal for family and team travel.
              </p>
            </div>
            <div className="bg-brand-maroon-dark text-white p-8 shadow-sm border border-brand-maroon">
              <h3 className="text-xl font-bold text-brand-yellow mb-3">Multiple Pickup Points</h3>
              <p className="text-white/90 leading-relaxed">
                Group bookings can include multiple pickup locations when arranged through our support team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-maroon text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Planning a Large or Complex Group Event?</h2>
          <p className="text-white/80 text-lg mb-8">
            Contact our support team directly for bespoke group transport arrangements.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-brand-yellow text-gray-900 font-bold text-sm px-10 py-3.5 hover:bg-brand-yellow-hover transition duration-300 shadow-sm"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
