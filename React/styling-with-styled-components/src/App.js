import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from  './components/Button';
import Dialog from './components/Dialog';

//styled-components 사용, 스타일 입력과 동시에 컴포넌트 생성 가능
//props값 설정에 따라 style 조정
//css의 조건부 활용
// const Circle = styled.div`
//   width : 5rem;
//   height : 5rem;
//   background : ${props => props.color || 'black'};       
//   border-radius : 50%;
//   ${props => props.huge && css `width : 10rem; height : 10rem`}
//   `;

const AppBlock = styled.div`
  width : 512px;
  margin : 0 auto;
  margin-top : 4rem;
  border : 1px solid black;
  padding : 1rem;
`;

const ButtonGroup = styled.div`
  &+& {
    margin-top : 1rem;
  }
  `;

function App()
{
  //dialog값을 전달(true, false)
  const [dialog, setDialog] = useState(false);

  //누르면 보이게,true 설정
  const onClick = () => {
    setDialog(true);
  }

  //삭제 버튼 클릭하면 사라짐
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  }

  //취소 버튼 클릭하면 사라짐
  const onCancle = () => {
    console.log('취소');
    setDialog(false);
  }

  return(
    <ThemeProvider theme = {{                       //ThemeProvider내부에 렌더링된 컴포넌트에서 palette를 조회하여 사용할 수 있다.
      palette : {
        blue : "#228be6",
        gray : "#495057",
        pink : "#f06595"
      }
    }}
    >
      <>
      <AppBlock>
        <ButtonGroup>
          <Button size = "large">BUTTON</Button>
          <Button >BUTTON</Button>
          <Button size = "small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color = "gray" size = "large">BUTTON</Button>
          <Button color = "gray">BUTTON</Button>
          <Button color = "gray" size = "small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color = "pink" size = "large">BUTTON</Button>
          <Button color = "pink">BUTTON</Button>
          <Button color = "pink" size = "small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size = "large" outline>BUTTON</Button>
          <Button color = "gray" outline>BUTTON</Button>
          <Button color = "pink" size = "small" outline>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size = "large" fullWidth>BUTTON</Button>
          <Button size = "large" color = "gray" fullWidth>BUTTON</Button>
          <Button size = "large" color = "pink" fullWidth onClick = {onClick}>삭제</Button>
        </ButtonGroup>
      </AppBlock>
      <Dialog title = "정말로 삭제하시겠습니까?" confirmText = "삭제" cancelText = "취소" onConfirm = {onConfirm} onCancle = {onCancle} visible = {dialog}> 
            데이터를 정말로 삭제하시겠습니까?
      </Dialog>
      </>
    </ThemeProvider>
    // <Circle color = "blue" huge />
  );
}
export default App;