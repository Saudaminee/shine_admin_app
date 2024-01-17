import React, { useState } from 'react';
import SplashScreen from './pages/SplashScreen';
import LoginScreen from './components/auth/LoginScreen';

const App = () => {
  const [splashScreenFinished, setSplashScreenFinished] = useState(false);

  const handleSplashFinish = () => {
    setSplashScreenFinished(true);
  };

  return (
    <div>
      {!splashScreenFinished ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <LoginScreen />
      )}
    </div>
  );
};

export default App;