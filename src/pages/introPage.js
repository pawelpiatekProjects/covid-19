import React from 'react';
import styled from 'styled-components';

import World from '../components/world/world';

const IntroPageWrapper = styled.div`

`;

const IntroPage = ()=>{
    return(
        <IntroPageWrapper>
            <p>Intro page</p>
            <World/>
        </IntroPageWrapper>
    )
};

export default IntroPage;
