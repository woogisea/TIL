import React from 'react';
import styled from 'styled-components/native';
import Counter from './src/components/Counter';

const AppBlock = styled.View`
  flex: 1;
`;
const App = () => {
  return (
    <AppBlock>
      <Counter initialNumber={0} />
    </AppBlock>
  );
};

export default App;
