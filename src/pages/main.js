import React from 'react';
import styled from 'styled-components';
import MainCountry from '../components/mainCountry/mainCountry';
import CountryPreviewList from '../components/countryPreviewList/countryPreviewList';
import Hero from '../assets/reusable/components/hero';

const MainPageWrapper = styled.div`
`;

const HeroWrapper = styled.div`

`;

const ContentWrapper = styled.div`
padding: 8rem;
display: grid;
grid-template-columns: 70% 30%;
grid-gap: 5rem;
`;

const MainCountryWrapper = styled.div`
grid-column: 1/ span 1;
grid-row: 2/span 1;
`;

const CountryPreviewWrapper = styled.div`
grid-column: 2/ -1;
grid-row: 2/span 1;
`;

const Main = () => {
    return (
        <MainPageWrapper>
            <HeroWrapper>
                <Hero text="Przypadki w Polsce"/>
            </HeroWrapper>
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

export default Main;
