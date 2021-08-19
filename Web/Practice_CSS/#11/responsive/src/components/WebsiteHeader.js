import React from 'react';
import styled from 'styled-components';
import toggle from '../img/toggle.png';
import banner from '../img/banner.jpg';

const HeaderWrapper = styled.div`
    padding: 20px 100px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    display: flex;
    justify-content: space-between;
    width: 100%;

    h2 {
        color: white;
        font-size: 2.5rem;
        margin: 0;
    }

    .toggle {
        img {
            max-width: 40px;
            cursor: pointer;
        }
    }

`;

const BackWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .content {
        z-index: 10000;
        max-width: 900px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            color: white;
            font-size: 5rem;
            text-align: center;
            margin: 0;
        }
        p{
            color: white;
            text-align: center;
        }
        button {
            border-radius: 10px;
            border: none;
            outline: none;
            background : white;
            padding: 0.5rem 1.5rem;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 400px;
        z-index: 1;
        background : linear-gradient(to top, #111, transparent);
    }
`;
const WebsiteHeader = () => {
    return (
        <>
            <HeaderWrapper>
                <h2>Travel</h2>
                <div className="toggle">
                    <img src={toggle} alt="toggle"/>
                </div>
            </HeaderWrapper>
            <BackWrapper>
                <img src={banner} alt="banner"/>
                <div className="content">
                    <h2>Explore The World</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, consequatur, tenetur vero accusamus veniam quo libero ea earum magnam sit nihil consequuntur asperiores impedit iusto. Quod eligendi voluptates exercitationem. Sequi.</p>
                    <button>Learn More</button>
                </div>
            </BackWrapper>
        </>
    );
};

export default WebsiteHeader;