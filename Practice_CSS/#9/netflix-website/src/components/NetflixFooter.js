import React from 'react';
import styled from 'styled-components';
import play from '../img/play.png';

const NetflixFooterBlock = styled.div`
    margin-left: 4.5rem;
    margin-top: 10rem;
    display: flex;
    align-items: center;

    span {
        color : white;
        font-weight: bold;
        font-size: 1.3rem;
        margin-left: 0.5rem;
    }

    @media (max-width : 991px) {
        margin-top: 5rem;
    }
`;

const NetflixFooter = () => {

    return (
        <>
            <NetflixFooterBlock>
                <img src={play} alt="play" width = "50px" height = "50px" />
                <span>WATCH TRAILER</span>
            </NetflixFooterBlock>
        </>
    );
};

export default NetflixFooter;