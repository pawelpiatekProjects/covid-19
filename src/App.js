import React from 'react';
import GlobalStyle from './assets/styles/globalStyle';
import CountryPreviewList from './components/countryPreviewList/countryPreviewList';
import GoogleFontLoader from 'react-google-font-loader';

function App() {

    return (
        <div className="App">
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Montserrat',
                        weights: [400, 500, 700]
                    }
                ]}
                subsets={['latin']}
            />
            <GlobalStyle/>
            <CountryPreviewList/>
        </div>
    );
}

export default App;
