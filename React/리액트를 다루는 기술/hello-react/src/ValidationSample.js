import React, { Component } from 'react'
import './ValidationSample.css';

export default class ValidationSample extends Component {
    state = {
        password : '',
        validate : false,
        clicked : false
    };

    handleChange = e => {
        this.setState({
            password : e.target.value
        });
    };

    handleButtonClick = () => {
        this.setState({
            click : true,
            validate : this.state.password === '0000'
        });
        this.input.focus();
    };
    render() {
        return (
            <div>
                {/*class의 이름을 className으로 상황에 맞게 설정*/}
                {/*ref를 사용해서 DOM에 직접적으로 접근*/}
                <input 
                    ref = {(ref) => this.input = ref}
                    type = "password" 
                    value = {this.state.password} 
                    onChange = {this.handleChange} 
                    className = {this.state.clicked ? (this.state.validate ? 'success' : 'failure') : ''}
                />
                <button onClick = {this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}
