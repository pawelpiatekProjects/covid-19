import React, {useState, useEffect} from 'react';
import {APIURL} from '../../assets/APIURL';
import styled from 'styled-components';
import axios from 'axios';
import * as variables from '../../assets/styles/variables';
import DailyConfirmed from '../charts/dailyConfirmed';
import Hero from '../../assets/reusable/components/hero';
import Info from './Info/Info';
import AllConfirmed from "../charts/allConfirmed";
// import AllConfirmed from "../charts/allConfirmed";


const MainCountryWrapper = styled.div`
width: 80%;
margin: 5rem auto;
`;

const Intro = styled.div`

`;

const MainCountryHeader = styled.h1`
font-weight: 400;
font-size: 2.5rem;
`;

const Cases = styled.div`
margin: 6rem 0 0 3rem;
`;

const RateContainer = styled.div`

`;

const Paragraph = styled.p`
font-size: 1.6rem;

span{
font-weight: 500;
}
`;

const ChartsWrapper = styled.div`
margin-top: 10rem;
  svg{
  width: 100%;
  }
`;

const ChartHeader = styled.h1`
font-weight: 400;
`;

const MainCountry = ({data}) => {

    const [cases, setCases] = useState([]);
    const [allConfirmedChart, setAllConfirmedChart] = useState([]);
    const [date, setDate] = useState(null);
    const [introData, setIntroData] = useState({});


    const calculateIncrease = (num1, num2, precision) =>{
        return (((num1/num2)-1)*100).toFixed(precision);
    }

    useEffect(() => {
        const fetchData = async ()=>{
            const {data} = await axios.get(APIURL);
            const mainCountry = data['Poland'];
            setCases(mainCountry);

            const allConfirmedChart = mainCountry.filter(el=>{
                const date = parseInt(el.date.slice(5, 6))
                                if (date > 2) {
                                    return el
                                }
            });
            setAllConfirmedChart(allConfirmedChart);
            // console.log(allConfirmedChart);
            const lastDay = mainCountry[mainCountry.length-1];
            const previousDay = mainCountry[mainCountry.length-2];
            const rate = (lastDay.deaths/lastDay.confirmed).toFixed(3);
            const previousRate = (previousDay.deaths/previousDay.confirmed).toFixed(3);
            const activeCases = lastDay.confirmed - lastDay.recovered - lastDay.deaths;
            const previousDayActiveCases = previousDay.confirmed - previousDay.recovered - previousDay.deaths;
            const confirmedIncrease = calculateIncrease(lastDay.confirmed, previousDay.confirmed,1);
            const activeCasesIncrease = calculateIncrease(activeCases, previousDayActiveCases,1);
            const recoveredIncrease = calculateIncrease(lastDay.recovered, previousDay.recovered,1);
            const deathIncrease = calculateIncrease(lastDay.deaths, previousDay.deaths,1);
            const rateIncrease = calculateIncrease(rate, previousRate,3);
            setDate(lastDay.date);
            const introData ={
                confirmed: lastDay.confirmed,
                deaths: lastDay.deaths,
                recovered: lastDay.recovered,
                rate: rate,
                activeCases: activeCases,
                confirmedIncrease: confirmedIncrease,
                activeCasesIncrease: activeCasesIncrease,
                recoveredIncrease: recoveredIncrease,
                deathIncrease: deathIncrease,
                rateIncrease: rateIncrease
            }
            setIntroData(introData);
        }
        fetchData();
    }, [])


    return (
        <>

            <Hero text="Statystyki w Polsce"/>
            <MainCountryWrapper>

                <MainCountryHeader>Statystyki z dnia: {date}</MainCountryHeader>
                <Info data={introData}/>
                <AllConfirmed data={allConfirmedChart}/>
                {/*<DailyConfirmed/>*/}
                {/*{console.log(allConfirmedChart)}*/}

                {/*Another file*/}
                {/*<ChartsWrapper>*/}
                {/*<ChartHeader>Liczba zachorowań w Polsce w kolejnych dniach</ChartHeader>*/}
                {/*<ResponsiveContainer width="100%" height={400}>*/}
                {/*<LineChart  data={cases} margin={{top: 5, right: 20, bottom: 5, left: 0}}>*/}
                {/*<Line type="monotone" dataKey="Polska" stroke="#8884d8"/>*/}
                {/*<CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>*/}
                {/*<XAxis dataKey="name"/>*/}
                {/*<YAxis/>*/}
                {/*<Tooltip/>*/}
                {/*</LineChart>*/}
                {/*</ResponsiveContainer>*/}

                {/*<ChartHeader>Dzienna liczba zachorowań w Polsce</ChartHeader>*/}
                {/*<ResponsiveContainer width="100%" height={400}>*/}
                {/*<BarChart  data={casesDaily} margin={{top: 5, right: 20, bottom: 5, left: 0}}>*/}
                {/*<Bar type="monotone" dataKey="Polska" stroke="#8884d8"/>*/}
                {/*<CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>*/}
                {/*<XAxis dataKey="name"/>*/}
                {/*<YAxis/>*/}
                {/*<Tooltip/>*/}
                {/*</BarChart>*/}
                {/*</ResponsiveContainer>*/}

                {/*</ChartsWrapper>*/}

            </MainCountryWrapper>
        </>
    );


};



export default MainCountry;
