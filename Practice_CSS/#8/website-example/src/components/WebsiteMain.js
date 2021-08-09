import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import twitter from '../img/twitter.png';
import thumb1 from '../img/thumb1.png';
import thumb2 from '../img/thumb2.png';
import thumb3 from '../img/thumb3.png';
import WebsiteBackground from './WebsiteBackground';

const WebsiteMainBlock = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-left: 5rem;
`;
const ArticleBlock = styled.div`
    width: 50%;
    .text {
        font-size: 4rem;
        margin-bottom: 0;
    }

    .textetc {
        font-size: 4rem;
        margin: 0;
    }
    .subSpan {
        color: green;
        font-weight: 800;
        font-size: 5rem;
    }

    button {
        background-color: green;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        color: white;
        font-weight: bold;

        &:hover {
            background-color: #27ae60;
        }
        
    }
`;
const ImgBlock = styled.div`
`;
const AsideBlock = styled.div`
    margin : auto 0;
    img {
        width: 30px;
        height: 30px;
        display: block;
        margin-top: 1.5rem;
        margin-right: 1rem;
        &:hover {
            opacity: 0.5;
        }
    }
`;

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);

`;
const ImgWrapper = styled.img`
    width: 65px;
    margin-right: 2rem;
    transition: 0.5s;

    &:hover {
        width: 70px;
        padding-bottom: 1rem;
    }
`;

const WebsiteBackgroundBlock = styled.div`
    position: absolute;
    background : ${props => props.color};
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    clip-path: circle(600px at right 800px);
`;

const WebsiteMain = () => {
    const [count, setCount] = useState(0);
    const [color,setColor] = useState("#017143")
    console.log(count);

    const onClick = e => {
        setCount(0)
        if(e.target.id === 'text') {
            setCount(1)
            setColor("#017143")
        }
        else if(e.target.id === 'text2') {
            setCount(2)
            setColor("#eb7495")
        }
        else if(e.target.id === 'text3') {
            setCount(3)
            setColor("#d752b1")
        }
    }

    useEffect(() => {
        setCount(1)
        setColor("green")
    }, []);

    const data = {
        1 : <img src = {img1} alt = "img1" width = "400px" height = "580px" />,
        2 : <img src = {img2} alt = "img2" width = "400px" height = "580px"/>,
        3 : <img src = {img3} alt = "img3" width = "400px" height = "580px"/>
    }

    return (
        <>
            <WebsiteBackgroundBlock color = {color}/>
            <WebsiteMainBlock>
                <ArticleBlock>
                    <h2 className = "text">It's not just Coffee</h2>
                    <h2 className = "textetc">It's <span className = "subSpan">Starbucks</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut provident doloremque id perferendis iure nihil illo commodi delectus facere hic! Pariatur sequi suscipit omnis voluptates amet veniam vel blanditiis quisquam.</p>
                    <button>LEARN MORE</button>
                </ArticleBlock>
                <ImgBlock>
                    {
                        data[count]
                    }
                </ImgBlock>
                <AsideBlock>
                    <img src={facebook} alt=""/>
                    <img src={instagram} alt=""/>
                    <img src={twitter} alt=""/>
                </AsideBlock>
            </WebsiteMainBlock>
            <Footer>
                <ImgWrapper src = {thumb1}  onClick = {onClick} id = "text"/>
                <ImgWrapper src = {thumb2}  onClick = {onClick} id = "text2"/>
                <ImgWrapper src = {thumb3}  onClick = {onClick} id = "text3"/>
            </Footer>
        </>
    );
};

export default WebsiteMain;