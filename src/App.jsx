  import React, { useState, useEffect } from 'react';
  import { QuizProvider } from './context/QuizContext';
  import Home from './pages/Home';
  import Login from './pages/Login';

  function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

    const handleLogin = (userData) => {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    };

    return (
      <QuizProvider>
        {user ? <Home /> : <Login onLogin={handleLogin} />}
      </QuizProvider>
    );
  }

  export default App;
