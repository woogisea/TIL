import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import styled from 'styled-components';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import twitter from '../img/twitter.png';
import cocacola1 from '../img/cocacola1.png';
import cocacola2 from '../img/cocacola2.png';
import cocacola3 from '../img/cocacola3.png';
import cocacola4 from '../img/cocacola4.png';
import cocacola5 from '../img/cocacola5.png';
import cocacola6 from '../img/cocacola6.png';

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    EffectCoverflow,Pagination
  } from 'swiper/core';

SwiperCore.use([EffectCoverflow,Pagination]);

const WebsiteFormBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width : 991px) {
        flex-direction: column;
    }
`;
const LeftBlock = styled.div`
    position: relative;
    width: 600px;
    margin-right: 20px;
    h2 {
        margin: 0;
        padding-top: 4rem;
        color : white;
        font-size: 3.5rem;
    }

    p {
        color: white;
    }

    button {
        padding: 0.5rem 0.75rem;
        border: none;
        background-color: red;
        color: white;
        font-weight: bold;
        font-size: 1.125rem;
        border-radius: 15px;
        margin-top: 0.5rem;
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
    }

    @media (max-width : 991px) {
        max-width: 100%;
    }
`;
const Footer = styled.div`
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
        background-color: white;
        margin-right: 1.5rem;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        transition: 0.2s ease-in-out;

        img {
            filter: invert(1);
            transform: scale(0.5);
        }

        &:hover {
            opacity: 0.5;
            transform: translateY(-10px);
        }
    }
`;
const RightBlock = styled.div`
    width: 500px;
    display: flex;
    justify-content: flex-end;

    .swiper-container {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 180px;
        height: 500px;
        display: flex;
        justify-content: center;
    }


    .swiper-slide img{
        position: absolute;
        max-height: 100%;
        bottom: 0;
    }

    img {
        max-width: 150px;
    }

    .swiper-container-3d .swiper-slide-shadow-left,
    .swiper-container-3d .swiper-slide-shadow-right {
    background-image: none;

    @media (max-width : 991px) {
        max-width: 100%;
    }
}
`;

const WebsiteForm = () => {
    return (
        <>
            <WebsiteFormBlock>
                <LeftBlock>
                    <h2>Taste the Feeling</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora exercitationem, odio voluptatibus sunt quisquam maxime laborum vitae, asperiores eligendi earum molestiae illum accusamus explicabo voluptas. Commodi eum cumque vitae magnam.</p>
                    <button>Learn More</button>
                </LeftBlock>
                <RightBlock>
                    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true,
                        }} loop = {true} pagination={true} className="mySwiper">
                            <SwiperSlide><img src={cocacola1} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={cocacola2} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={cocacola3} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={cocacola4} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={cocacola5} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={cocacola6} alt=""/></SwiperSlide>
                    </Swiper>
                </RightBlock>
            </WebsiteFormBlock>
            <Footer>
                <div className="img"><img src={facebook} alt=""/></div>
                <div className="img"><img src={instagram} alt=""/></div>
                <div className="img"><img src={twitter} alt=""/></div>
            </Footer>
        </>
    );
};

export default WebsiteForm;