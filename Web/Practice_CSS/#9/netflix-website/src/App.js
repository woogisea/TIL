import React from 'react';
import NetflixBackground from './components/NetflixBackground';
import NetflixFooter from './components/NetflixFooter';
import NetflixHeader from './components/NetflixHeader';
import NetflixMain from './components/NetflixMain';

const App = () => {
  return (
    <div>
      <NetflixBackground />
      <NetflixHeader />
      <NetflixMain />
      <NetflixFooter />
    </div>
  );
};

export default App;