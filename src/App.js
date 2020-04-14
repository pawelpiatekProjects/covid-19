import React from 'react';
import GlobalStyle from './assets/styles/globalStyle';
import MainPage from './pages/main';
import GoogleFontLoader from 'react-google-font-loader';
import TopBar from './components/topBar/topBar';

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
            <MainPage/>
        </div>
    );
}

export default App;
