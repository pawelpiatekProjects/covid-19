import React from 'react';
import * as variables from '../../assets/styles/variables';
import styled from 'styled-components';

import {
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,

} from 'recharts';

const BarChartWrapper = styled.div`
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

@media(max-width: 600px){
font-size: 1.6rem;
}
`;

const BarChartComponent = ({data, header, dataKey, barColor}) => {


    return (
        <BarChartWrapper>
            <ChartHeader>{header}</ChartHeader>
            <ChartWrapper>
                <ResponsiveContainer >
                    <BarChart data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <Bar type="monotone" dataKey={dataKey} stroke={barColor} fill={barColor}/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                    </BarChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </BarChartWrapper>
    )
};

export default BarChartComponent;
