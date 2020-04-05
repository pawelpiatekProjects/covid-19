import React from 'react';
import styled from 'styled-components';

const CountryPreviewWrapper = styled.div`

`;

const CountryPreview = ({name}) =>(
    <CountryPreviewWrapper>
        <p>{name}</p>
    </CountryPreviewWrapper>
);

export default CountryPreview;
