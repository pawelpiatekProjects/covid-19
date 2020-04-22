import React from 'react';
import styled from 'styled-components';
import * as variables from "../../../assets/styles/variables";
import Info from '../Info/Info';
import AllConfirmed from '../../charts/allConfirmed';
import BarChartComponent from '../../charts/BarChartComponent';
import ActiveCases from '../../charts/activeCases';
import DeathsAndRecovered from '../../charts/deathsAndRecovered';

const Wrapper = styled.div`

`;

const MainCountryHeader = styled.h1`
font-weight: 400;
font-size: 2.5rem;

@media(max-width: 1150px){
font-size: 2rem;
}
`;



const MainCountryWrapper = ({date,  introData, allConfirmedChart, activeCases, dailyConfirmed, dailyDeaths}) =>{
    return(
        <Wrapper>
            <MainCountryHeader>Statystyki z Polski z dnia: {date}</MainCountryHeader>


                    <Info data={introData}/>
                    <AllConfirmed data={allConfirmedChart}/>
                    <BarChartComponent
                        barColor={variables.yellow1}
                        dataKey="Potwierdzone"
                        data={dailyConfirmed}
                        header="Dzienna liczba zachorowań w Polsce"/>
                    <ActiveCases data={activeCases}/>
                    <BarChartComponent
                        barColor={variables.red1}
                        dataKey="Zgony"
                        data={dailyDeaths}
                        header="Dzienna liczba zgonów"
                    />
                    <DeathsAndRecovered data={allConfirmedChart}/>

        </Wrapper>
    )
};

export default MainCountryWrapper;
