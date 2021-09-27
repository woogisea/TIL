import React, {useState} from 'react';
import styled from 'styled-components/native';

const CounterBlock = styled.SafeAreaView`
  flex: 1;
`;
const TitleBlock = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ButtonBlock = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

const Button = styled.TouchableOpacity``;
const ImageStyle = styled.Image`
  width: 50px;
  height: 50px;
`;
const TextStyle = styled.Text`
  font-size: 25px;
`;

const Counter = ({initialNumber}) => {
  const [counter, setCounter] = useState(initialNumber);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <CounterBlock>
      <TitleBlock>
        <TextStyle>{counter}</TextStyle>
      </TitleBlock>
      <ButtonBlock>
        <Button onPress={increase}>
          <ImageStyle source={require('../image/add.png')} />
        </Button>
        <Button onPress={decrease}>
          <ImageStyle source={require('../image/remove.png')} />
        </Button>
      </ButtonBlock>
    </CounterBlock>
  );
};

export default Counter;
