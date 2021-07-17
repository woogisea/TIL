import React from 'react';
import ColorBox from './components/ColorBox';
import SelectColor from './components/SelectColor';
import { ColorProvider } from './contexts/color';

const App = () => {
  return (
    //Provider를 통해 value값 바꾸기
    <ColorProvider>
       <div>
         <SelectColor />
        <ColorBox />
      </div>
   </ColorProvider>
  );
};

export default App;