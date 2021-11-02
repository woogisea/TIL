import React from 'react';
import CSSModule from './CSSModule';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';

const App = () => {
  return (
    <div>
      <SassComponent />
      <br />
      <CSSModule />
      <br />
      <StyledComponent />
    </div>
  );
};

export default App;