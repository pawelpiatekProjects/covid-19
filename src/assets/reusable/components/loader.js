import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import * as variables from '../../../assets/styles/variables';

const LoaderWrapper = styled.div`
width: 100%;
margin: 0 auto;
text-align: center;
`;

const LoaderComponent = () =>{
    return(
        <LoaderWrapper>
            <Loader
                type="ThreeDots"
                color={variables.secondaryBlue}
                height={100}
                width={100}
            />
        </LoaderWrapper>
    )
};

export default LoaderComponent;
