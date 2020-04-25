import React from 'react';
import styled from 'styled-components';

import World from '../components/world/world';

const IntroPageWrapper = styled.div`
padding: 5rem;
`;

const IntroPage = ()=>{
    return(
        <IntroPageWrapper>
            <World/>
        </IntroPageWrapper>
    )
};

export default IntroPage;
