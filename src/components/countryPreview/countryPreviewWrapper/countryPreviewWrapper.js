import React from 'react';
import styled from 'styled-components';
import * as variables from "../../../assets/styles/variables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import CountryDetails from '../countryDetails/countryDetails';

const Wrapper = styled.div`

`;

const Intro = styled.div`
background: ${variables.white};
box-shadow: 0px 4px 5px -6px rgba(0,0,0,0.75);
padding: 1rem;
margin: 2px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
    &:hover{
    cursor: pointer;
   
    }
`;

const Caret = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const CountryName = styled.p`
font-size: 1.4rem;
`;

const Details = styled.div`
background: ${variables.secondaryBlue};
width: 90%;
margin: 0 auto;
padding: 1rem;
`;

const CountryPreviewWrapper = ({countryName, isDetails, lastDay}) => {
    let activeCaret = isDetails ? faCaretDown : faCaretRight;
    return (
        <Wrapper>
            <>
                <Intro>
                    <CountryName>{countryName}</CountryName>

                    <Caret icon={activeCaret}/>
                </Intro>
                {
                    isDetails ? (
                        <Details>
                            <CountryDetails confirmed={lastDay.confirmed} deaths={lastDay.deaths}
                                            recovered={lastDay.recovered}/>
                        </Details>
                    ) : null
                }
            </>
        </Wrapper>
    )
};

export default CountryPreviewWrapper;
