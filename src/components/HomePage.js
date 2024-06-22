import React from 'react';

const HomePage = () => {
  const navigateToOtherApp = () => {
    window.location.href = 'https://other-react-app-url.com';
  };

  return (
    <div style={{ backgroundColor: 'green', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={navigateToOtherApp}>Go to Other App</button>
    </div>
  );
};

export default HomePage;
