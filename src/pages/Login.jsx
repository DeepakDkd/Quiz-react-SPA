import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState(null);  // State for error handling

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset error before each submission

    // Basic input validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const userData = { email, password };

    if (isSignup) {
      const existingUser = JSON.parse(localStorage.getItem('user'));
      if (existingUser && existingUser.email === email) {
        setError('A user with this email already exists.');
      } else {
        localStorage.setItem('user', JSON.stringify(userData));
        onLogin(userData);
      }
    } else {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        onLogin(storedUser);
      } else {
        setError('Invalid email or password');  
      }
    }
  };

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">{isSignup ? 'Sign Up' : 'Log In'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}  
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>
        <div className="mt-4">
          <button
            type="button"
            onClick={() => {
              setIsSignup(!isSignup);
              setError(null);  
            }}
            className="text-blue-500 underline"
          >
            {isSignup ? 'Already have an account? Log in' : 'Don\'t have an account? Sign up'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
