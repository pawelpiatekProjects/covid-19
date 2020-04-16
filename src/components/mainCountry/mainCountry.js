import React, {useState, useEffect} from 'react';
import {APIURL} from '../../assets/APIURL';
import styled from 'styled-components';
import axios from 'axios';
import DailyConfirmed from '../charts/dailyConfirmed';
import Hero from '../../assets/reusable/components/hero';
import Info from './Info/Info';
import AllConfirmed from "../charts/allConfirmed";
import ActiveCases from '../charts/activeCases';



const MainCountryWrapper = styled.div`
width: 80%;
margin: 5rem auto;
`;


const MainCountryHeader = styled.h1`
font-weight: 400;
font-size: 2.5rem;
`;


const MainCountry = () => {

    const [cases, setCases] = useState([]);
    const [allConfirmedChart, setAllConfirmedChart] = useState([]);
    const [date, setDate] = useState(null);
    const [introData, setIntroData] = useState({});
    const [dailyConfirmed, setDailyConfirmed] = useState([]);
    const [activeCases, setActiveCases] = useState([]);


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
            const dailyConfirmed = [];
            const currentCases = [];

            for(let i=0; i < allConfirmedChart.length ;i++){
                let confirmed = 0;
                if(i>0){
                     confirmed = allConfirmedChart[i].confirmed - allConfirmedChart[i-1].confirmed;

                }else{
                    confirmed = allConfirmedChart[i].confirmed;
                }

                dailyConfirmed.push({
                    date: allConfirmedChart[i].date,
                    Potwierdzone: confirmed
                })
                currentCases.push({
                    date:allConfirmedChart[i].date,
                    Chorzy: allConfirmedChart[i].confirmed - allConfirmedChart[i].recovered - allConfirmedChart[i].deaths
                })

            }


            setActiveCases(currentCases);
            setDailyConfirmed(dailyConfirmed)

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
                <DailyConfirmed data={dailyConfirmed}/>
                <ActiveCases data={activeCases}/>

            </MainCountryWrapper>
        </>
    );


};



export default MainCountry;
