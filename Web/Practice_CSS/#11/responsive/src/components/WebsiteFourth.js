import React from 'react';
import styled from 'styled-components';
import destination1 from '../img/destination1.jpg';
import destination2 from '../img/destination2.jpg';
import destination3 from '../img/destination3.jpg';

const WebsiteFourthBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;
    margin-top: 5rem;

    .content {
        width: 100%;
        text-align: center;
        margin-bottom: 3rem;
        h2 {
            color: white;
            font-size: 2rem;
            margin: 0;
        }
        p {
            color: white;
        }
    }
`;

const ImgBlock = styled.div`
    img+img {
        padding-left: 1rem;
    }

    img {
        height: 500px;
    }

    height: 600px;
    margin-bottom: 3rem;

    .text {
        width: 100%;
        .title, .content {
            width: 100%;
            display: flex;
            justify-content: space-around;
            h2,p {
                color: white;
            }

            h2 {
                margin: 0;
                margin-top: 1rem;
            }
        }
    }
`;
const WebsiteFourth = () => {
    return (
        <WebsiteFourthBlock>
            <div className="content">
                <h2>Most popular travel destination in the world</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem fuga, necessitatibus repellat odit laboriosam et dolorem ea praesentium libero corrupti? Quia obcaecati minima similique rem consequuntur itaque explicabo ab.</p>
            </div>
            <ImgBlock>
                <img src={destination1} alt="d1"/>    
                <img src={destination2} alt="d2"/>  
                <img src={destination3} alt="d3"/>

                <div className="text">
                    <div className="title">
                        <h2>Destination1</h2>
                        <h2>Destination2</h2>
                        <h2>Destination3</h2>
                    </div>
                    <div className="content">
                        <p>Country name</p>
                        <p>Country name</p>
                        <p>Country name</p>
                    </div>
                </div>
            </ImgBlock>
        </WebsiteFourthBlock>
    );
};

export default WebsiteFourth;