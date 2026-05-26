import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const navigate = useNavigate();

  // Validation rules
  const validateFullName = (val: string) => val.length >= 3 ? '' : 'Name must be at least 3 characters.';
  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? '' : 'Please enter a valid email address.';
  const validatePhone = (val: string) => /^\d{9,10}$/.test(val) ? '' : 'Please enter a valid 9 or 10 digit phone number.';
  const validatePassword = (val: string) => {
    if (val.length < 8) return 'Password must be at least 8 characters.';
    if (!/[A-Z]/.test(val)) return 'Password must contain at least 1 uppercase letter.';
    if (!/[0-9]/.test(val)) return 'Password must contain at least 1 number.';
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(val)) return 'Password must contain at least 1 special character.';
    return '';
  };
  const validateConfirmPassword = (val: string) => val === password && val !== '' ? '' : 'Passwords do not match.';

  const errors = {
    fullName: validateFullName(fullName),
    email: validateEmail(email),
    phone: validatePhone(phone),
    password: validatePassword(password),
    confirmPassword: validateConfirmPassword(confirmPassword),
    terms: termsAccepted ? '' : 'You must accept the Terms & Conditions.',
  };

  const isFormValid = Object.values(errors).every(err => err === '');

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      password: true,
      confirmPassword: true,
      terms: true,
    });

    if (!isFormValid) return;

    setIsLoading(true);
    setServerError('');

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      // Simulate existing user scenario
      if (email === 'test@example.com' || phone === '241234567') {
        setServerError('Email or phone number is already registered.');
      } else {
        // Verification step mock
        navigate('/signin'); 
      }
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    setIsGoogleLoading(true);
    setServerError('');
    setTimeout(() => {
      setIsGoogleLoading(false);
      navigate('/'); 
    }, 1500);
  };

  return (
    <main className="flex-grow flex items-center justify-center py-16 px-4 bg-gray-50">
      <div className="bg-white rounded-none shadow-xl w-full max-w-2xl p-10 relative border border-gray-100">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-500">Join XTASS for faster bookings, ride tracking, and exclusive offers.</p>
        </div>
        
        {serverError && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-sm">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">Full Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onBlur={() => handleBlur('fullName')}
                disabled={isLoading || isGoogleLoading}
                className={`w-full rounded border p-3 text-sm focus:outline-none focus:ring-1 ${touched.fullName && errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brand-maroon focus:ring-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
                placeholder="John Doe" 
              />
              {touched.fullName && errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur('email')}
                disabled={isLoading || isGoogleLoading}
                className={`w-full rounded border p-3 text-sm focus:outline-none focus:ring-1 ${touched.email && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brand-maroon focus:ring-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
                placeholder="john@example.com" 
              />
              {touched.email && errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
              <div className="relative flex">
                <span className="inline-flex items-center px-4 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  +233
                </span>
                <input 
                  type="tel" 
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} // numeric only
                  onBlur={() => handleBlur('phone')}
                  disabled={isLoading || isGoogleLoading}
                  className={`flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r border focus:outline-none focus:ring-1 ${touched.phone && errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brand-maroon focus:ring-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
                  placeholder="024 123 4567" 
                  maxLength={10}
                />
              </div>
              {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="password">Password <span className="text-red-500">*</span></label>
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading || isGoogleLoading}
                  className="text-brand-maroon text-sm font-medium flex items-center hover:underline focus:outline-none disabled:opacity-50"
                >
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  {showPassword ? 'Hide' : 'Show'} 
                </button>
              </div>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleBlur('password')}
                disabled={isLoading || isGoogleLoading}
                className={`w-full rounded border p-3 text-sm focus:outline-none focus:ring-1 ${touched.password && errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brand-maroon focus:ring-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
                placeholder="Min 8 characters" 
              />
              {touched.password && errors.password && <p className="text-red-500 text-xs mt-1 font-medium leading-tight">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirmPassword">Confirm Password <span className="text-red-500">*</span></label>
              <input 
                type={showPassword ? "text" : "password"} 
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => handleBlur('confirmPassword')}
                disabled={isLoading || isGoogleLoading}
                className={`w-full border rounded p-3 text-sm focus:outline-none focus:ring-1 ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brand-maroon focus:ring-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
                placeholder="Repeat password" 
              />
              {touched.confirmPassword && errors.confirmPassword && <p className="text-red-500 text-xs mt-1 font-medium">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div className="flex items-center mb-6">
            <input 
              type="checkbox" 
              id="terms"
              name="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              onBlur={() => handleBlur('terms')}
              disabled={isLoading || isGoogleLoading}
              className="h-4 w-4 text-brand-maroon focus:ring-brand-maroon border-gray-300 rounded disabled:opacity-50"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the <Link to="/" className="text-brand-maroon font-medium hover:underline">Terms & Conditions</Link> and <Link to="/" className="text-brand-maroon font-medium hover:underline">Privacy Policy</Link>
            </label>
          </div>
          {touched.terms && errors.terms && <p className="text-red-500 text-xs -mt-4 mb-4 font-medium">{errors.terms}</p>}

          <button 
            type="submit"
            disabled={(!isFormValid && Object.keys(touched).length > 0) || isLoading || isGoogleLoading}
            className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-gray-900 font-bold py-3 px-4 rounded shadow-sm transition-colors mb-4 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-gray-900" /> : 'Create Account'}
          </button>
          
          <button 
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading || isGoogleLoading}
            className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded shadow-sm transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGoogleLoading ? <Loader2 className="w-5 h-5 animate-spin text-gray-700" /> : (
              <>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Continue with Google
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Already have an account? <Link to="/signin" className="font-bold text-brand-maroon hover:underline">Sign In</Link>
        </div>
      </div>
    </main>
  );
}
