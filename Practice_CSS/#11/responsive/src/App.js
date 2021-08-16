import React from 'react';
import Footer from './components/Footer';
import WebsiteFinal from './components/WebsiteFinal';
import WebsiteFourth from './components/WebsiteFourth';
import WebsiteHeader from './components/WebsiteHeader';
import WebsiteSecond from './components/WebsiteSecond';
import WebsiteThird from './components/WebsiteThird';


const App = () => {
  return (
    <>
      <WebsiteHeader />
      <WebsiteSecond />
      <WebsiteThird />
      <WebsiteFourth />
      <WebsiteFinal>
        <Footer />
      </WebsiteFinal>
    </>
  );
};

export default App;