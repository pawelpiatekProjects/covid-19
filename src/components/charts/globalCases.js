import React from 'react';
import styled from 'styled-components';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import * as variables from "../../assets/styles/variables";

const GlobalCasesWrapper = styled.div`
background-color: ${variables.white};
padding: 5rem;

@media(max-width: 500px){
padding: 5rem 2rem;
}

@media(max-width: 350px){
padding: 3rem 1rem;
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

const GlobalCases = ({data}) =>{
    return(
        <GlobalCasesWrapper>
            <ChartWrapper>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <Line type="monotone" dataKey="confirmed" stroke={variables.lineChart2}/>
                        <Line type="monotone" dataKey="deaths" stroke={variables.red1}/>
                        <Line type="monotone" dataKey="recovered" stroke={variables.green1}/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </GlobalCasesWrapper>
    )
};

export default GlobalCases;
