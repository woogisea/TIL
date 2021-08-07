import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AccordianBox = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const Menu = styled.div`
    width: 300px;
    border-radius: 8px;
    overflow: hidden;


`;
const Item = styled.li`
    border-top: 1px solid #2980b9;
    overflow: hidden;

    .btn {
        display: block;
        padding : 16px 20px;
        background-color: #3498db;
        color: white;
        font-weight: bold;
        text-decoration: none;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            width: 14px;
            height: 14px;
            background-color: #3498db;
            left: 20px;
            bottom: -7px;
            transform: rotate(45deg);
        }
    }
`;
const Smenu = styled.div`
    background-color: #34495e;
    overflow: hidden;

    a {
        display: block;
        padding: 16px 26px;
        color: white;
        text-decoration: none;
        position: relative;
        margin: 4px 0;

        &::before {
            content: "";
            position: absolute;
            width: 6px;
            height: 100%;
            background-color: #3498db;
            left: 0;
            top : 0;
            transition: 0.3s;
            opacity: 0;
        }

        &:hover::before {
            opacity: 1;
        }
    }
`;

const Accordian = () => {
    return (
        <AccordianBox>
            <Menu>
                <Item id = "profile">
                    <Link to = "#profile" className = "btn">Profile</Link>
                    <Smenu id = "smenu">
                        <Link to="#">Post</Link>
                        <Link to = "#">Pictures</Link>
                    </Smenu>
                </Item>

                <Item id = "message">
                    <Link to = "#message" className = "btn">Message</Link>
                    <Smenu id = "smenu">
                        <Link to = "#">new</Link>
                        <Link to ="#">Sent</Link>
                        <Link to="#">Spam</Link>
                    </Smenu>
                </Item>

                <Item id = "settings">
                    <Link to="#settings" className = "btn">Settings</Link>
                    <Smenu id = "smenu">
                        <Link to ="#">Password</Link>
                        <Link to="#">Language</Link>
                    </Smenu>
                </Item>

                <Item>
                    <Link to = "#" className = "btn">Logout</Link>
                </Item>
            </Menu>
        </AccordianBox>
    );
};

export default Accordian;