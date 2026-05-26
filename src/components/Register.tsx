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
        alert('Registration successful! Redirecting to verification...');
        navigate('/signin'); 
      }
    }, 1500);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 shadow-2xl border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create Account</h1>
        
        {serverError && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-sm">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => handleBlur('fullName')}
              disabled={isLoading}
              className={`w-full border p-3 text-sm focus:outline-none ${touched.fullName && errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
              placeholder="John Doe" 
            />
            {touched.fullName && errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
              disabled={isLoading}
              className={`w-full border p-3 text-sm focus:outline-none ${touched.email && errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
              placeholder="name@example.com" 
            />
            {touched.email && errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
            <div className="relative flex">
              <div className="flex items-center justify-center border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm font-medium text-gray-600 select-none">
                +233
              </div>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} // numeric only
                onBlur={() => handleBlur('phone')}
                disabled={isLoading}
                className={`w-full border p-3 text-sm focus:outline-none ${touched.phone && errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
                placeholder="24 123 4567" 
                maxLength={10}
              />
            </div>
            {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-bold text-gray-700">Password</label>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="text-brand-maroon text-xs font-bold flex items-center gap-1 disabled:opacity-50"
              >
                {showPassword ? 'Hide' : 'Show'} 
                {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              </button>
            </div>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
              disabled={isLoading}
              className={`w-full border p-3 text-sm focus:outline-none ${touched.password && errors.password ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
              placeholder="Password" 
            />
            {touched.password && errors.password && <p className="text-red-500 text-xs mt-1 font-medium leading-tight">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Confirm Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => handleBlur('confirmPassword')}
              disabled={isLoading}
              className={`w-full border p-3 text-sm focus:outline-none ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
              placeholder="Confirm Password" 
            />
            {touched.confirmPassword && errors.confirmPassword && <p className="text-red-500 text-xs mt-1 font-medium">{errors.confirmPassword}</p>}
          </div>

          <div className="mt-2">
            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                onBlur={() => handleBlur('terms')}
                disabled={isLoading}
                className="mt-0.5 w-4 h-4 text-brand-maroon focus:ring-brand-maroon border-gray-300 rounded-sm disabled:opacity-50"
              />
              <label htmlFor="terms" className="text-sm text-gray-600 font-medium">
                I agree to the <Link to="/terms" className="text-brand-maroon hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-brand-maroon hover:underline">Privacy Policy</Link>
              </label>
            </div>
            {touched.terms && errors.terms && <p className="text-red-500 text-xs mt-1 font-medium">{errors.terms}</p>}
          </div>

          <button 
            type="submit"
            disabled={(!isFormValid && Object.keys(touched).length > 0) || isLoading}
            className="w-full py-3 mt-2 bg-brand-yellow text-brand-maroon-dark font-bold hover:bg-brand-yellow-hover transition-colors disabled:opacity-50 flex items-center justify-center disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-brand-maroon-dark" /> : 'Create Account'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600 font-medium">
          Already have an account? <Link to="/signin" className="text-brand-maroon font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </main>
  );
}
