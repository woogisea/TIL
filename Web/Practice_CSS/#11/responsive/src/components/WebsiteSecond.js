import React from 'react';
import styled from 'styled-components';
import img1 from '../img/img1.jpg';

const WebsiteSecondBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .leftside {
        text-align: end;
        padding-right: 3rem;
        width: 50%;
        min-width: 50%;
        h2 {
            color: white;
            font-size: 2rem;
        }
        p{
            display: block;
            color: white;
        }

        button {
            border-radius: 10px;
            border: none;
            outline: none;
            background : white;
            padding: 0.5rem 1.5rem;
        }
    }

    .rightside {
        min-width: 50%;
        width: 50%;
        position: relative;
        min-height: 500px;
        margin : 3rem auto;

        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 80%;
            height: 500px;
            object-fit: cover;
        }
    }
`;

const WebsiteSecond = () => {
    return (
        <WebsiteSecondBlock>
            <div className="leftside">
                <h2>Feel the Beauty Of The World</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, minima animi iusto saepe quidem porro nam numquam quaerat doloribus adipisci inventore magni assumenda, dicta minus commodi! Iusto libero excepturi assumenda.</p>
                <button>Popular Destination</button>
            </div>
            <div className="rightside">
                <img src={img1} alt="img1"/>
            </div>
        </WebsiteSecondBlock>
    );
};

export default WebsiteSecond;