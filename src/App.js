import React from 'react';
import GlobalStyle from './assets/styles/globalStyle';
import CountryPreviewList from './components/countryPreviewList/countryPreviewList';

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <CountryPreviewList/>
    </div>
  );
}

export default App;
