import React,{useEffect} from 'react'

const SplashScreen = ({ onFinish }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onFinish();
          }, 3000); // Adjust the duration as needed
      
          return () => clearTimeout(timeout);
        }, [onFinish]);
      
  return (
    <div>
    <h1>Splash Screen</h1>
    {/* Add your splash screen content here */}
  </div>
  )
}

export default SplashScreen
