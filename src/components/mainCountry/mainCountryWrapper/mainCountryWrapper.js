import React from 'react';
import styled from 'styled-components';
import * as variables from "../../../assets/styles/variables";


const Wrapper = styled.div`

`;

const MainCountryHeader = styled.h1`
font-weight: 400;
font-size: 2.5rem;
text-align: center;

span{
font-weight: 500;
color: ${variables.lineChart1};
}

@media(max-width: 1150px){
font-size: 2rem;
}
`;


const MainCountryWrapper = ({date, children}) => {
    return (
        <Wrapper>
            <MainCountryHeader>Cases in Poland, last update: <span>{date}</span></MainCountryHeader>

            <>
                {children}
            </>
        </Wrapper>
    )
};

export default MainCountryWrapper;
