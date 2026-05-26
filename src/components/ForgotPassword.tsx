import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [identifier, setIdentifier] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const isValidInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]{8,}$/;
    return emailRegex.test(identifier) || phoneRegex.test(identifier);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!isValidInput()) {
      setError('Please enter a valid email address or phone number.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Mock triggering an error condition
      if (identifier === 'notfound@example.com' || identifier === '0000000000') {
        setError('No account found with these details. Please check and try again.');
      } else {
        setIsSuccess(true);
      }
    }, 1500);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 shadow-2xl border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Reset Password</h1>
        
        {isSuccess ? (
          <div className="text-center animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-[#F3EDF1] text-brand-maroon rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium mb-8 leading-relaxed text-[15px]">
              Reset instructions sent to your email/phone. Please check your inbox.
            </p>
            <Link 
              to="/signin" 
              className="w-full block py-3 bg-brand-maroon text-white font-bold hover:bg-brand-maroon-hover transition-colors text-center shadow-sm"
            >
              Return to Sign In
            </Link>
          </div>
        ) : (
          <>
            <p className="text-gray-600 text-center mb-8 text-sm leading-relaxed">
              Enter your email address or phone number to receive a secure password reset link.
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-sm">
                <p>{error}</p>
                {error.includes('No account found') && (
                  <p className="mt-3 pt-3 border-t border-red-200/50 text-xs">
                    Need help? <Link to="#" className="underline font-bold text-red-700 hover:text-red-800">Contact Support</Link>
                  </p>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Email or Phone Number</label>
                <input 
                  type="text" 
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  disabled={isLoading}
                  className={`w-full border p-3.5 text-sm focus:outline-none transition-colors ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} disabled:bg-gray-50 disabled:text-gray-500`} 
                  placeholder="Email or Phone" 
                  autoFocus
                />
              </div>

              <button 
                type="submit"
                disabled={identifier.trim() === '' || isLoading}
                className="w-full py-3.5 mt-2 bg-brand-maroon text-white font-bold hover:bg-brand-maroon-hover transition-colors disabled:opacity-50 flex items-center justify-center disabled:cursor-not-allowed shadow-sm"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Reset Link'}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600 font-medium">
              Remember your password? <Link to="/signin" className="text-brand-maroon font-bold hover:underline">Sign In</Link>
            </p>
          </>
        )}
      </div>
    </main>
  );
}
