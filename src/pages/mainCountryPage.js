import React from 'react';
import styled from 'styled-components';
import MainCountry from '../components/mainCountry/mainCountry';
import CountryPreviewList from '../components/countryPreviewList/countryPreviewList';

const MainPageWrapper = styled.div`
padding: 5rem;

@media(max-width: 600px){
padding: 3rem;
}

@media(max-width: 400px){
padding: 1.5rem;
}
`;


const ContentWrapper = styled.div`

display: flex;

@media(max-width: 1000px){
flex-direction: column;
}
`;

const MainCountryWrapper = styled.div`
margin-right: 5rem;
width: 70%;

@media(max-width: 1000px){
width: 90%;
margin: 0 auto;
}

@media(max-width: 700px){
width: 100%;
}
`;

const CountryPreviewWrapper = styled.div`
margin: 0 auto;
width: 30%;

@media(max-width: 1000px){
width: 90%;
margin: 10rem auto;
}

@media(max-width: 700px){
width: 100%;
}

`;

const MainCountryPage = () => {
    return (
        <MainPageWrapper>
            <ContentWrapper>
                <MainCountryWrapper>
                    <MainCountry/>
                </MainCountryWrapper>
                <CountryPreviewWrapper>
                    <CountryPreviewList/>
                </CountryPreviewWrapper>
            </ContentWrapper>
        </MainPageWrapper>
    )
};

export default MainCountryPage;
