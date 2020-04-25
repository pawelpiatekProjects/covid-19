import React, {useState, useEffect} from 'react';
import {APIURL} from '../../assets/APIURL';
import axios from 'axios';

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
                    recovered: 0
                })
            })

            arr.map(el=>{
                for(let i=0; i<el.length; i++){
                    dates[i].confirmed += el[i].confirmed;
                    dates[i].deaths += el[i].deaths;
                    dates[i].recovered += el[i].recovered;
                }
            })

            console.log(dates);
        }

        fetchData();
    },[])
    return (
        <>

        </>
    )
};

export default World;
