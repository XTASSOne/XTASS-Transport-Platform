export default function Footer() {
  return (
    <footer className="bg-[#1A0006] text-white">
      <div className="max-w-[80rem] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-lg mb-6 pb-2 border-b border-white/10">About Us</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Why Choose XTASS</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Our Story</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Press & Media</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-lg mb-6 pb-2 border-b border-white/10">Our Services</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="/instant-pickup" className="text-gray-400 hover:text-white transition-colors text-[15px]">Instant Pickup</a></li>
            <li><a href="/scheduled-rides" className="text-gray-400 hover:text-white transition-colors text-[15px]">Scheduled Rides</a></li>
            <li><a href="/airport-transfers" className="text-gray-400 hover:text-white transition-colors text-[15px]">Airport Transfers</a></li>
            <li><a href="/group-transportation" className="text-gray-400 hover:text-white transition-colors text-[15px]">Group Transportation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Pricing Information</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-lg mb-6 pb-2 border-b border-white/10">Support</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Help Center / FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Contact Us</a></li>
            <li className="text-gray-400 text-[15px]">Customer Support: <span className="text-white font-medium">00233 123 456 789</span></li>
            <li className="text-gray-400 text-[15px]">Email: <span className="text-white font-medium">support@xtass.com</span></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Report an Issue</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold text-lg mb-6 pb-2 border-b border-white/10">Legal</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Cookie Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Driver Agreement</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Safety Guidelines</a></li>
            <li><a href="/sitemap" className="text-brand-yellow font-bold hover:text-brand-yellow-hover transition-colors text-[15px] mt-2 inline-block">Sitemap</a></li>
          </ul>
        </div>

      </div>

      <div className="bg-black border-t border-gray-800 p-6 text-center text-gray-400 text-sm">
        <p className="mb-1">© 2025 XTASS. All rights reserved. Made with ❤️ in Ghana</p>
        <p>Available at: Kotoka Int'l Airport | Kumasi Airport | Tamale Airport</p>
      </div>
    </footer>
  );
}
