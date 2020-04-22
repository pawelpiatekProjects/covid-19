import React, {useState} from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/styles/variables';
import CountryDetails from './countryDetails/countryDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const CountryPreviewWrapper = styled.div`

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

const CountryPreview = ({name, cases}) => {
    const[isDetails, setIsDetails] = useState(false);
    let activeCaret = isDetails ? faCaretDown : faCaretRight;
    const lastDay = cases[cases.length-1];
    return(
            <CountryPreviewWrapper onClick={()=>setIsDetails(!isDetails)}>
                    <>
                        <Intro>
                            <CountryName>{name}</CountryName>

                            <Caret icon={activeCaret}/>
                        </Intro>
                        {
                            isDetails ? (
                                <Details>
                                    <CountryDetails confirmed={lastDay.confirmed} deaths={lastDay.deaths} recovered={lastDay.recovered}/>
                                </Details>
                            ) : null
                        }
                    </>
            </CountryPreviewWrapper>
        );
};

export default CountryPreview;
