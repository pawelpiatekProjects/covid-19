import React, {useState, useEffect} from 'react';
import {APIURL} from '../../assets/APIURL';
import styled from 'styled-components';
import axios from 'axios';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    Cell
} from 'recharts';

const DailyConfirmedWrapper = styled.div`

`;

const ChartHeader = styled.h1`
font-weight: 400;
`;

const DailyConfirmed = () =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
            const data = await axios.get(APIURL);
            console.log(data)
        }

        fetch()
    },[])
    return(
        <DailyConfirmedWrapper>
            <ChartHeader>Dzienna liczba zachorowań w Polsce</ChartHeader>
            <ResponsiveContainer width="100%" height={400}>
                {/*<BarChart data={casesDaily} margin={{top: 5, right: 20, bottom: 5, left: 0}}>*/}
                    {/*<Bar type="monotone" dataKey="Polska" stroke="#8884d8"/>*/}
                    {/*<CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>*/}
                    {/*<XAxis dataKey="name"/>*/}
                    {/*<YAxis/>*/}
                    {/*<Tooltip/>*/}
                {/*</BarChart>*/}
            </ResponsiveContainer>
        </DailyConfirmedWrapper>
    )
};

export default DailyConfirmed;
