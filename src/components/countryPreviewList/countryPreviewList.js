import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../../assets/reusable/components/loader';
import CountryPreviewListWrapper from './countryPreviewListWrapper/countryPreviewListWrapper';


//todo: add sorting by country name
const CountryPreviewList = () => {

    const [countryList, setCountryList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsLoading(true);
        const fetch = async () => {
            const {data} = await axios.get(`https://pomber.github.io/covid19/timeseries.json`);
            const keys = Object.keys(data)
            setCountryList(keys);
            setIsLoading(false);
        }
        fetch();
    }, [])

    const getInputValue = e => {
        setInputValue(e.target.value);
    }
//todo: change loader
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
