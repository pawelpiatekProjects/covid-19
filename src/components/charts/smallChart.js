import React from 'react';
import styled from 'styled-components';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

const SmallChartWrapper = styled.div`
width: 100%;
height: ${props=>props.height}rem;
`;


const SmallChart = ({data, color, dataKey, height}) => {
    return (
        <SmallChartWrapper height={height}>
            <ResponsiveContainer>
                <LineChart data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                    <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </SmallChartWrapper>
    )
};

export default SmallChart;
