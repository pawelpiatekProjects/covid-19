import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as variables from '../../assets/styles/variables';
import ColorSpan from '../../assets/reusable/components/colorSpan';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar, Cell} from 'recharts';

const MainCountryWrapper = styled.div`

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
    const [casesDaily, setCasesDaily] = useState([]);

    useEffect(() => {
        axios.get(`https://pomber.github.io/covid19/timeseries.json`)
            .then(response => {
                const newArr = [];
                const baseArr = response.data['Poland'];
                const casesEveryDay=[];
                baseArr
                    .filter(el => {
                        const date = parseInt(el.date.slice(5, 6))
                        if (date > 2) {
                            return el
                        }

                    })
                    .map(el => {
                        newArr.push({
                            name: el.date,
                            Polska: el.confirmed,
                        })
                    });

                    for(let i=0;i<baseArr.length; i++){
                        if(i>0){
                            casesEveryDay.push({
                                name: baseArr[i].date,
                                Polska: baseArr[i].confirmed - baseArr[i-1].confirmed
                            })
                        }else{
                            casesEveryDay.push({
                                name: baseArr[i].date,
                                Polska: baseArr[i].confirmed
                            })
                        }

                    }

                    const casesFromMarch = casesEveryDay.filter(el=>{
                        const date = parseInt(el.name.slice(5, 6))
                        if (date > 2) {
                            return el
                        }
                    })

                setCasesDaily(casesFromMarch);
                return newArr
            })
            .then(arr => {
                setCases(arr)
            })
    }, [])

    const rate = parseInt(data.deaths)/parseInt(data.confirmed)
    return (
        <MainCountryWrapper>
            <Intro>

                <MainCountryHeader>Statystyki w Polsce</MainCountryHeader>
                <Cases>
                    <Paragraph><span>Potwierdzone przypadki: </span><ColorSpan
                        color={variables.primaryBlue}>{data.confirmed}</ColorSpan></Paragraph>
                    <Paragraph><span>Przypadki śmiertelne: </span><ColorSpan
                        color={variables.red1}>{data.deaths}</ColorSpan></Paragraph>
                    <Paragraph><span>Wyleczone przypadki: </span><ColorSpan
                        color={variables.green1}>{data.recovered}</ColorSpan></Paragraph>
                    <Paragraph><span>Wsółczynnik śmiertelności: </span>
                        <ColorSpan color={variables.yellow1}>{rate.toFixed(4)*10}%</ColorSpan>
                    </Paragraph>
                </Cases>
            </Intro>
            <ChartsWrapper>
                <ChartHeader>Liczba zachorowań w Polsce w kolejnych dniach</ChartHeader>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart  data={cases} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <Line type="monotone" dataKey="Polska" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
                <ChartHeader>Dzienna liczba zachorowań w Polsce</ChartHeader>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart  data={casesDaily} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <Bar type="monotone" dataKey="Polska" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                    </BarChart>
                </ResponsiveContainer>

            </ChartsWrapper>

        </MainCountryWrapper>
    );


};

export default MainCountry;
