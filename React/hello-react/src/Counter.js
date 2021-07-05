import React, { Component } from 'react'

//클래스형 컴포넌트
//state는 컴포넌트 내부에서 바뀔 수 있는 값
export default class Counter extends Component {
    //컴포넌트 생성자
    // constructor(props) {
    //     super(props);      //constuctor를 작성할 때에는 super를 호출해 줘야한다.

         //state 초기값
    //     this.state = {
    //         number : 0,
    //         fixedNumber : 0
    //     };
    // }

    //생성자 없이 선언하기
    state = {
        number : 0,
        fixedNumber : 0
    }
    render() {
        const {number, fixedNumber} = this.state;    //state 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixedNumber}</h2>
                <button
                    onClick = {()=> {
                        this.setState({number : number + 1}, ()=> {console.log('setState 호출')})     //setState의 두번째 파라미터로 콜백함수 선언, setState작업이 끝난 후 특정 작업 실행
                    }}
                > +1 </button>
            </div>
        )
    }
}
