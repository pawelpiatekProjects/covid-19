import React from 'react';
import styled from 'styled-components';
import heroImg from'../../../assets/img/hero3.png';
import * as variables from '../../../assets/styles/variables';

const HeroWrapper = styled.div`
width: 100%;
background: ${variables.secondaryBlue};
display: flex;
flex-direction: row;
padding: 5rem;
align-items: center;

`;

const HeorImg = styled.img`
height: 15rem;
`;

const HeroText = styled.h1`
font-weight: 500;
font-size: 4rem;
margin-left: 3rem;
color: ${variables.white};
`;

const Hero =({text}) =>{
    return(
        <HeroWrapper>
            <HeorImg src={heroImg}/>
            <HeroText>{text}</HeroText>
        </HeroWrapper>
)
};

export default Hero;
