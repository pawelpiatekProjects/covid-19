import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../../assets/reusable/components/loader';
import CountryPreviewListWrapper from './countryPreviewListWrapper/countryPreviewListWrapper';
import {APIURL} from '../../assets/APIURL';


//todo: add sorting by country name
const CountryPreviewList = () => {

    const [countryList, setCountryList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsLoading(true);
        const fetch = async () => {
            const {data} = await axios.get(APIURL);
            const keys = Object.keys(data);
            const values = Object.values(data);
            const newArr = [];

            for(let i=0; i<keys.length;i++){
                newArr.push({
                    name: keys[i],
                    cases: values[i]
                })
            }

            setCountryList(newArr);
            setIsLoading(false);
        }
        fetch();
    }, [])

    const getInputValue = e => {
        setInputValue(e.target.value);
    }

    return (
        <>
            {isLoading ? (
                <Loader/>
            ) : (
                <CountryPreviewListWrapper

                    countryList={countryList}
                    inputValue={inputValue}
                    getInputValue={getInputValue}
                />
            )}
        </>
    );
};

export default CountryPreviewList;
