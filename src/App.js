import React from 'react';
import GlobalStyle from './assets/styles/globalStyle';
import CountryPreviewList from './components/countryPreviewList/countryPreviewList';
import MainCountry from "./components/mainCountry/mainCountry";

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <MainCountry/>
      <CountryPreviewList/>
    </div>
  );
}

export default App;
