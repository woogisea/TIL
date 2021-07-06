import React, { Component } from 'react'

export default class EventPractice extends Component {
    //input값 여러개 다루기 
    state = {
        username : ' ',
        message : ' '
    };

    handleChange = e => {
        //input의 name을 key값으로 사용해서 여러개의 input값을 관리한다.
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState( {
            username : ' ',
            message : ' '
        })
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}></input>
                <input type = "text" name = "message" value = {this.state.message} onChange = {this.handleChange}></input>
                {/*버튼 클릭 시 메세지 띄우고 공백으로 바꿈, this.state로 현재, setState로 바꿈*/}
                <button onClick = {this.handleClick}>확인</button>
            </div>
        )
    }
}
