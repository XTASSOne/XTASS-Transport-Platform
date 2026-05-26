import { ChevronDown, Eye, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'signin' | 'register'>('signin');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-[80rem] px-4 py-3 flex items-center justify-between">
          <a href="/">
            <img
              src="https://i.ibb.co/6JVrf2Bt/XTASS-Logo.png"
              alt="XTASS Logo"
              className="h-10 md:h-12 w-auto cursor-pointer"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {/* Phone Info */}
            <div className="flex items-center gap-3">
              <div className="bg-brand-maroon/10 p-2 rounded-full text-brand-maroon">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Call Us
                </span>
                <span className="text-sm font-bold text-gray-900">
                  00233 123 456 789
                </span>
              </div>
            </div>

            {/* Auth Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAuthOpen(!isAuthOpen)}
                className="flex items-center gap-1 text-sm font-bold text-gray-800 hover:text-brand-maroon transition-colors"
                title="Open Auth Menu"
              >
                Sign In | Register{' '}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isAuthOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isAuthOpen && (
                <div className="absolute right-0 top-full mt-4 w-[700px] bg-white border border-gray-100 shadow-2xl rounded-sm flex overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="w-5/12 bg-gray-50 p-6 border-r border-gray-100">
                    <h3 className="text-lg font-bold text-brand-maroon mb-2">
                      New to XTASS? Create an account
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Join our platform to book airport transfers, private cars,
                      and manage your trips all in one place.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 mb-8">
                      <li className="flex items-center gap-2">
                        <span className="text-brand-yellow font-bold">✓</span>{' '}
                        Faster bookings
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-brand-yellow font-bold">✓</span>{' '}
                        Track your rides
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-brand-yellow font-bold">✓</span>{' '}
                        Exclusive offers
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <p className="text-xs font-semibold text-gray-800 mb-1">
                        Need to complete your enrollment?
                      </p>
                      <button
                        onClick={() => setAuthTab('register')}
                        className="text-sm font-bold text-brand-maroon hover:underline"
                      >
                        Create Account &gt;
                      </button>
                    </div>
                  </div>
                  <div className="w-7/12 p-6 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold">
                        {authTab === 'signin' ? 'Sign In to XTASS' : 'Register'}
                      </h2>
                      <a href="/signin" className="text-xs font-bold text-gray-500 hover:text-brand-maroon underline">Full Page</a>
                    </div>
                    {authTab === 'signin' ? (
                      <form className="flex flex-col gap-4 text-sm" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label className="block text-gray-700 mb-1">Email or Phone Number</label>
                          <input type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:border-brand-maroon" placeholder="Email or Phone" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="text-gray-700">Password</label>
                            <button type="button" className="text-brand-maroon text-xs font-bold flex items-center gap-1">
                              Show <Eye className="w-3 h-3" />
                            </button>
                          </div>
                          <input type="password" className="w-full border border-gray-300 p-2 focus:outline-none focus:border-brand-maroon" placeholder="Password" />
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="keepSignedIn" />
                          <label htmlFor="keepSignedIn" className="text-gray-600 font-medium">Keep me signed in</label>
                        </div>
                        <button className="w-full py-3 bg-brand-maroon text-white font-bold hover:bg-brand-maroon-hover transition-colors">
                          Sign In
                        </button>
                        <div className="flex items-center gap-4 my-2">
                          <div className="h-px bg-gray-200 flex-1" />
                          <span className="text-xs text-gray-400 font-bold uppercase">OR</span>
                          <div className="h-px bg-gray-200 flex-1" />
                        </div>
                        <button type="button" className="w-full py-2 border border-gray-300 font-semibold hover:bg-gray-50 transition-colors">
                          Continue with Google
                        </button>
                        <button type="button" className="text-brand-maroon font-bold text-center mt-2 hover:underline">
                          Forgot Password? &gt;
                        </button>
                      </form>
                    ) : (
                      <form className="flex flex-col gap-3 text-sm" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label className="block text-gray-700 mb-1">Full Name</label>
                          <input type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:border-brand-maroon" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-1">Email</label>
                          <input type="email" className="w-full border border-gray-300 p-2 focus:outline-none focus:border-brand-maroon" placeholder="john@example.com" />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-1">Password</label>
                          <input type="password" className="w-full border border-gray-300 p-2 focus:outline-none focus:border-brand-maroon" placeholder="Password" />
                        </div>
                        <button className="w-full py-3 mt-2 bg-brand-yellow text-brand-maroon font-bold hover:bg-brand-yellow-hover transition-colors">
                          Create Account
                        </button>
                        <button type="button" className="text-brand-maroon font-bold text-center mt-2 hover:underline" onClick={() => setAuthTab('signin')}>
                          &lt; Back to Sign In
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}
            </div>

            <button className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-maroon font-bold px-6 py-2.5 transition-colors">
              Book Now
            </button>
          </div>

          <button
            className="md:hidden p-2 text-brand-maroon"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Red Nav Bar (Desktop) */}
      <nav className="hidden md:block bg-brand-maroon">
        <div className="mx-auto max-w-[80rem] px-4 flex items-center justify-between h-12">
          <div className="flex items-center h-full gap-1">
            <a href="/" className="h-full px-4 text-sm font-bold text-brand-yellow flex items-center">Home</a>
            <button className="h-full px-4 text-sm font-bold text-white hover:text-brand-yellow transition-colors">Who We Are</button>
            <button className="h-full px-4 text-sm font-bold text-white hover:text-brand-yellow transition-colors">What We Do</button>
            <button className="h-full px-4 text-sm font-bold text-white hover:text-brand-yellow transition-colors">Hospitality</button>
            <button className="h-full px-4 text-sm font-bold text-white hover:text-brand-yellow transition-colors">My Bookings</button>

            {/* Mega Menu Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="h-full px-4 text-sm font-bold text-white hover:text-brand-yellow transition-colors flex items-center gap-1">
                Reservations <ChevronDown className="w-4 h-4" />
              </button>
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 bg-white border-t-2 border-brand-maroon shadow-xl flex min-w-[400px]">
                  <div className="w-2/5 bg-gray-50 flex flex-col border-r border-gray-100">
                    <button className="p-4 text-sm font-bold text-brand-maroon bg-white text-left shadow-[inset_2px_0_0_#800020]">Car Rental</button>
                    <button className="p-4 text-sm font-bold text-gray-600 hover:text-brand-maroon text-left">Business</button>
                  </div>
                  <div className="w-3/5 p-4 flex flex-col gap-2">
                    <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-maroon px-2 py-1">Start A Car Reservation</a>
                    <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-maroon px-2 py-1">View / Modify / Cancel</a>
                    <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-maroon px-2 py-1">All Deals And Coupons</a>
                    <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-maroon px-2 py-1">One Way Car Rental</a>
                    <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-maroon px-2 py-1">Long-Term Car Rental</a>
                  </div>
                </div>
              )}
            </div>

            <button className="h-full px-4 text-sm font-bold text-white hover:text-brand-yellow transition-colors">Careers</button>
            <button className="h-full px-4 text-sm font-bold text-white hover:text-brand-yellow transition-colors">Contact Us</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-[65px] left-0 right-0 bg-white shadow-xl h-[calc(100vh-65px)] overflow-y-auto w-full z-40 border-t border-gray-100">
          <div className="flex flex-col p-6 gap-4">
            <button className="text-lg font-bold text-left border-b border-gray-100 pb-2">Home</button>
            <button className="text-lg font-bold text-left border-b border-gray-100 pb-2">Who We Are</button>
            <button className="text-lg font-bold text-left border-b border-gray-100 pb-2">What We Do</button>
            <button className="text-lg font-bold text-left border-b border-gray-100 pb-2">Hospitality</button>
            <button className="text-lg font-bold text-left border-b border-gray-100 pb-2">My Bookings</button>
            <div className="flex flex-col">
              <button className="text-lg font-bold text-left flex justify-between items-center border-b border-gray-100 pb-2">
                Reservations <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <button className="text-lg font-bold text-left border-b border-gray-100 pb-2">Careers</button>
            <button className="text-lg font-bold text-left border-b border-gray-100 pb-2">Contact Us</button>
            
            <div className="mt-8">
              <a href="/signin" className="block w-full bg-brand-maroon text-white font-bold py-3 text-center transition-colors hover:bg-brand-maroon-hover">
                Sign In | Register
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
