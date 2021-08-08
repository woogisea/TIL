import React from 'react';
import styled from 'styled-components';

const ContactFormBlock = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: 1px solid black;
    padding: 1.5rem;
    background-color: white;
    box-shadow : 0 0 20px #44bd32;
    max-width: 600px;
    width: 80%;

    span {
        display: block;
        font-size: 1.125rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        text-align : center;
    }
`;

const FormBlock = styled.form`
    margin: 0 auto;

    button {
        width: 100%;
        margin-top: 0.5rem;
        padding: 0.5rem 0;
        background-color: #8c7ae6;
        border: none;

        &:hover {
            background-color: #9c88ff;
        }
    }
`;
const Divide = styled.div`
    box-sizing : border-box;
    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    border: 1px solid #7f8fa6;
    padding: 0.5rem;
    border-radius: 5px;

    &+& {
        margin-top: 0.5rem;
    }

    textarea {
        border: none;
        outline: none;
        width: 100%;
    }

`;
const InputForm = styled.input`
    border: none;
    outline: none;
    width: 100%;
`;

const ContactForm = () => {
    return (
        <ContactFormBlock>
            <span>Contact Us</span>
            <FormBlock>
                <Divide>
                    <label id = "username">FULL NAME :</label>
                    <InputForm id = "username" placeholder = "Enter Your Name"/>
                </Divide>

                <Divide>
                    <label id = "email">EMAIL :</label>
                    <InputForm id = "email" placeholder = "Enter Your Email"/>
                </Divide>

                <Divide>
                    <label id = "phone">PHONE NUMBER :</label>
                    <InputForm id = "phone" placeholder = "Enter Your Phone Number"/>
                </Divide>

                <Divide>
                    <label id = "message">MESSAGE :</label>
                    <textarea name="message" id="message"></textarea>
                </Divide>
               <button>SEND</button>
            </FormBlock>
        </ContactFormBlock>
    );
};

export default ContactForm;