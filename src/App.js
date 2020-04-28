import React from 'react';
import GlobalStyle from './assets/styles/globalStyle';
import MainCountryPage from './pages/mainCountryPage';
import IntroPage from './pages/introPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader';
import TopBar from './components/topBar/topBar';
import CountryInfo from './components/countryInfo/countryInfo';

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
            <TopBar/>
            <Switch>
                <Route path="/mainCountry" exact component={MainCountryPage}/>
                <Route path="/country" exact component={CountryInfo}/>
                <Route path="/" exact component={IntroPage}/>
            </Switch>


        </div>
    );
}

export default App;
