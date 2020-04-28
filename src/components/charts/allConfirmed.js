import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/styles/variables';
import {
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    ComposedChart,
    Bar,
} from 'recharts';

const AllConfirmedWrapper = styled.div`
   background-color: ${variables.white};
  padding: 5rem;
  margin-top: 3rem;
  
  @media(max-width: 800px){
  padding: 2rem;
  }
  
  @media(max-width: 500px){
  padding: 1rem;
  }
`;

const ChartWrapper = styled.div`
width: 100%;
height: 40rem;
@media(max-width: 1100px){
height: 20rem;
}
@media(max-width: 1000px){
height: 40rem;
}

@media(max-width: 900px){
height: 30rem;
}

@media(max-width: 800px){
height: 20rem;
}

@media(max-width: 550px){
height: 15rem;
}
`;

const ChartHeader = styled.h1`
font-weight: 400;

font-weight: 400;

@media(max-width: 600px){
font-size: 1.6rem;
`;

const AllConfirmed = ({data, countryName, dataKey1, dataKey2, color1, color2}) => {
    // const confirmed = [];
    // data.map(el => (
    //     confirmed.push({
    //         date: el.date,
    //         potwierdzone: parseFloat(el.confirmed),
    //         śmiertelne: el.deaths
    //     })
    // ))
    return (
        <AllConfirmedWrapper>


            <ChartHeader>Confirmed cases in {countryName} </ChartHeader>
            <ChartWrapper>
                <ResponsiveContainer>
                    <ComposedChart data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <Line type="monotone" dataKey={dataKey1} stroke={color2}/>
                        <Bar dataKey={dataKey2} barSize={20} fill={color1}/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                    </ComposedChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </AllConfirmedWrapper>
    )
};

export default AllConfirmed;
