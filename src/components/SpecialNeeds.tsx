import { Link } from 'react-router-dom';

export default function SpecialNeeds() {
  const heroStyle = {
    backgroundImage: 'linear-gradient(to right, rgba(139, 19, 49, 0.9) 0%, rgba(139, 19, 49, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%), url("https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&q=80")',
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
              Accessible Transport —<br />
              <span className="text-white">Everyone Deserves A Safe Ride</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Transport that accommodates every passenger. Wheelchair access, child seats, and trained drivers.
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

      {/* Accessibility Features */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-brand-maroon mb-10">Accessibility Features Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-brand-maroon mb-4">Wheelchair Access</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Toggle the wheelchair access option in Step 1 of the booking form. This ensures an accessible vehicle with trained driver awareness is allocated to your trip.
              </p>
            </div>
            <div className="bg-brand-maroon text-white p-10 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-brand-yellow mb-4">Child Seat Add-On</h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Child seats are available as an extra option in Step 4 of the booking flow. Suitable for infants and toddlers up to 18kg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-brand-maroon mb-12">How to Book Accessible Transport</h2>
          
          <div className="max-w-3xl space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-6 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-yellow text-gray-900 font-bold flex items-center justify-center text-lg shadow-sm">
                  1
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Start a Booking</h4>
                <p className="text-gray-600 font-medium">Enter your pickup and drop-off locations in the booking form on the homepage.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-6 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-yellow text-gray-900 font-bold flex items-center justify-center text-lg shadow-sm">
                  2
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Enable Wheelchair Access</h4>
                <p className="text-gray-600 font-medium">In Step 1, toggle the "Wheelchair Access Required" option to filter for accessible vehicles only.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-6 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-yellow text-gray-900 font-bold flex items-center justify-center text-lg shadow-sm">
                  3
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Add Child Seat (Optional)</h4>
                <p className="text-gray-600 font-medium">In Step 4 — Extras — select "Child Seat" if required. You'll choose the appropriate size.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-6 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-yellow text-gray-900 font-bold flex items-center justify-center text-lg shadow-sm">
                  4
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Confirm Your Ride</h4>
                <p className="text-gray-600 font-medium">Review your booking details and confirm. Your accessible vehicle is reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-maroon-dark text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Need Personalised Assistance?</h2>
          <div className="text-white/90 text-lg mb-8 space-y-2">
            <p>Phone: <span className="font-bold text-white">00233 123 456 789</span></p>
            <p>Email: <span className="font-bold text-white">support@xtass.com</span></p>
          </div>
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
