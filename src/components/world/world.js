import React, {useState, useEffect} from 'react';
import {APIURL} from '../../assets/APIURL';
import axios from 'axios';
import WorldWrapper from './worldWrapper/worldWrapper';
import GlobalCases from '../charts/globalCases';
import WorldWrapperIntro from './worldWrapper/worldWrapperIntro/worldWrapperIntro';

const World = () => {

    useEffect(()=>{
        const fetchData = async ()=>{
            const {data} = await axios.get(APIURL);

            const arr = Object.values(data)
            const dates = [];
            arr[0].map(el=>{
                dates.push({
                    date: el.date,
                    confirmed: 0,
                    deaths: 0,
                    recovered: 0,
                    // active: 0
                })
            })

            arr.map(el=>{
                for(let i=0; i<el.length; i++){
                    dates[i].confirmed += el[i].confirmed;
                    dates[i].deaths += el[i].deaths;
                    dates[i].recovered += el[i].recovered;
                    // const active = el[i].confirmed - el[i].deaths - el[i].recovered;
                    // dates[i].actives += active;
                }
            })



            setGlobalCases(dates);
            setLastDayConfirmed(dates[dates.length-1].confirmed);
            setLastDayDeaths(dates[dates.length-1].deaths);
            setLastDayRecovered(dates[dates.length-1].recovered);
            setLastDate(dates[dates.length-1].date);
        }

        fetchData();
    },[])

    const [globalCases, setGlobalCases] = useState([]);
    const [lastDayConfirmed, setLastDayConfirmed] = useState(null);
    const [lastDayDeaths, setLastDayDeaths] = useState(null);
    const [lastDayRecovered, setLastDayRecovered] = useState(null);
    const [lastDate, setLastDate] = useState(null);

    return (
            <WorldWrapper date={lastDate}>
                <WorldWrapperIntro
                    lastDayConfirmed={lastDayConfirmed}
                    lastDayDeaths={lastDayDeaths}
                    lastDatRecovered={lastDayRecovered}
                    data={globalCases}
                />
                <GlobalCases data={globalCases}/>
            </WorldWrapper>
    )
};

export default World;
