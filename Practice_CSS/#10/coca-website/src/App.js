import React, { useState } from 'react';
import WebsiteForm from './components/WebsiteForm';
import WebsiteHeader from './components/WebsiteHeader';
import WebsiteTemplete from './components/WebsiteTemplete';

const App = () => {
  const [isToggle, setIsToggle] = useState(false);

  const onClick = () => {
    setIsToggle(!isToggle)
  };

  return (
    <div>
      <WebsiteTemplete value = {isToggle}>
        <WebsiteHeader value = {isToggle} onClick = {onClick}/>
        <WebsiteForm />
      </WebsiteTemplete>
    </div>
  );
};

export default App;