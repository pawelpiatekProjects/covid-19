import React, {useState, useEffect} from 'react';
import {APIURL} from '../../assets/APIURL';
import axios from 'axios';
import MainCountryWrapper from './mainCountryWrapper/mainCountryWrapper';
import LoaderComponent from '../../assets/reusable/components/loader';
import * as variables from "../../assets/styles/variables";
import Info from './Info/Info';
import AllConfirmed from '../charts/allConfirmed';
import BarChartComponent from '../charts/BarChartComponent';
import ActiveCases from '../charts/activeCases';
import DeathsAndRecovered from '../charts/deathsAndRecovered';



const MainCountry = () => {

    const [allConfirmedChart, setAllConfirmedChart] = useState([]);
    const [date, setDate] = useState(null);
    const [introData, setIntroData] = useState({});
    const [dailyConfirmed, setDailyConfirmed] = useState([]);
    const [activeCases, setActiveCases] = useState([]);
    const [dailyDeaths, setDailyDeaths] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    const calculateIncrease = (num1, num2, precision) =>{
        return (((num1/num2)-1)*100).toFixed(precision);
    }

    useEffect(() => {
        const fetchData = async ()=>{
            setIsLoading(true)
            const {data} = await axios.get(APIURL);

            const mainCountry = data['Poland'];



            const allConfirmedChart = mainCountry.filter(el=>{
                const date = parseInt(el.date.slice(5, 6))
                                if (date > 2) {
                                    return el
                                }
            });
            const dailyConfirmed = [];
            const currentCases = [];
            const dailyDeaths = [];

            for(let i=0; i < allConfirmedChart.length ;i++){
                let confirmed = 0;
                let deaths = 0;
                if(i>0){
                     confirmed = allConfirmedChart[i].confirmed - allConfirmedChart[i-1].confirmed;
                     deaths = allConfirmedChart[i].deaths - allConfirmedChart[i-1].deaths;
                }else{
                    confirmed = allConfirmedChart[i].confirmed;
                    deaths = allConfirmedChart[i].deaths;
                }

                dailyConfirmed.push({
                    date: allConfirmedChart[i].date,
                    Potwierdzone: confirmed
                })
                currentCases.push({
                    date:allConfirmedChart[i].date,
                    current: allConfirmedChart[i].confirmed - allConfirmedChart[i].recovered - allConfirmedChart[i].deaths
                })
                dailyDeaths.push({
                    date: allConfirmedChart[i].date,
                    Zgony: deaths
                })

            }


            setActiveCases(currentCases);
            setDailyConfirmed(dailyConfirmed);
            setDailyDeaths(dailyDeaths);

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
            setIsLoading(false);
        }
        fetchData();
    }, [])



    return (
        <>
            {isLoading ? (
                <LoaderComponent/>
            ): (
                <MainCountryWrapper date={date}>
                    <Info data={introData}/>
                    <AllConfirmed
                        color2={variables.lineChart1}
                        color1={variables.red1}
                        dataKey1="confirmed"
                        dataKey2="deaths"
                        countryName="Poland"
                        data={allConfirmedChart}
                    />
                    <BarChartComponent
                        barColor={variables.yellow1}
                        dataKey="Potwierdzone"
                        data={dailyConfirmed}
                        header="Dzienna liczba zachorowań w Polsce"/>
                    <ActiveCases
                        data={activeCases}
                        dataKey="current"
                        color={variables.primaryBlue}/>
                    <BarChartComponent
                        barColor={variables.red1}
                        dataKey="Zgony"
                        data={dailyDeaths}
                        header="Dzienna liczba zgonów"
                    />
                    <DeathsAndRecovered data={allConfirmedChart}/>
                </MainCountryWrapper>
            )}


        </>
    );


};



export default MainCountry;
