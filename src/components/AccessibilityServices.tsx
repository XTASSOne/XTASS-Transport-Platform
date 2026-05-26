import { HeartHandshake, Phone, Mail, ArrowRight, CheckCircle2, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AccessibilityServices() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Accessibility Transport</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Inclusive mobility for everyone. Safe, comfortable, and reliable transport for passengers with special needs.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex items-center mb-10">
            <HeartHandshake className="w-10 h-10 text-brand-maroon mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Commitment to Accessibility</h2>
          </div>
          
          <div className="prose max-w-none text-gray-600 font-medium text-lg mb-12">
            <p className="mb-6">
              At XTASS, we believe that premium mobility should be accessible to all. We are committed to providing seamless transportation experiences for passengers requiring wheelchair-accessible vehicles, child safety seats, or additional physical assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 border border-gray-200 rounded">
              <Car className="w-8 h-8 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wheelchair Accessible Fleet</h3>
              <p className="text-gray-600 font-medium">
                A dedicated portion of our Van/Minivan fleet is equipped with modern ramps and secure locking mechanisms to ensure a safe, comfortable ride without the need to transfer from your wheelchair.
              </p>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-200 rounded">
              <CheckCircle2 className="w-8 h-8 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Driver Awareness &amp; Training</h3>
              <p className="text-gray-600 font-medium">
                Our drivers receive specialized training in assisting passengers with visual impairments, mobility challenges, and other special needs, ensuring respectful and professional support from door to door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Guidance */}
      <section className="py-20 bg-brand-maroon text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-10 tracking-tight text-center">How to Book Accessible Transport</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="space-y-8">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-brand-yellow text-brand-maroon-dark rounded-full flex items-center justify-center font-bold shrink-0 mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Start a Reservation</h3>
                    <p className="text-white/80 font-medium">Navigate to our main booking platform or select a specific service type like Airport Transfers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-brand-yellow text-brand-maroon-dark rounded-full flex items-center justify-center font-bold shrink-0 mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Select Vehicle Class</h3>
                    <p className="text-white/80 font-medium">Choose 'Van / Minivan' if you require a ramp-equipped vehicle for wheelchair access.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-brand-yellow text-brand-maroon-dark rounded-full flex items-center justify-center font-bold shrink-0 mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enable Accessibility Toggle</h3>
                    <p className="text-white/80 font-medium">Check the "Requires Wheelchair Access / Special Assistance" box in the passenger details section.</p>
                  </div>
                </li>
              </ol>
              <div className="mt-10">
                <Link to="/start-reservation" className="inline-flex items-center text-brand-maroon-dark bg-brand-yellow px-8 py-3 font-bold uppercase tracking-wider text-sm hover:bg-brand-yellow-hover transition-colors">
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="bg-brand-maroon-dark p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-brand-yellow">Special Arrangements</h3>
              <p className="text-white/80 font-medium mb-8 leading-relaxed">
                If your journey requires highly personalized coordination, specialized seating, or you are traveling with a registered service animal, we highly recommend contacting our dispatch team directly before booking.
              </p>
              <div className="space-y-4">
                <a href="tel:+233000000000" className="flex items-center text-white hover:text-brand-yellow transition-colors font-bold">
                  <Phone className="w-6 h-6 mr-3" /> +233 (0) 500 000 000
                </a>
                <a href="mailto:accessibility@xtass.com" className="flex items-center text-white hover:text-brand-yellow transition-colors font-bold">
                  <Mail className="w-6 h-6 mr-3" /> accessibility@xtass.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
