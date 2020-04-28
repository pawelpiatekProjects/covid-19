import React from 'react';
import styled from 'styled-components';

import World from '../components/world/world';

const IntroPageWrapper = styled.div`
padding: 5rem;

@media(max-width: 600px){
padding: 3rem;
}

@media(max-width: 400px){
padding: 1.5rem;
}
`;

const IntroPage = ()=>{
    return(
        <IntroPageWrapper>
            <World/>
        </IntroPageWrapper>
    )
};

export default IntroPage;
