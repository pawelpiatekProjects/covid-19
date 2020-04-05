import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GlobalStyle from './assets/styles/globalStyle';

function App() {
  const [polandCases, setPolandCases] = useState([]);
  useEffect(()=>{

    axios.get(`https://pomber.github.io/covid19/timeseries.json`)
        .then(response=>{
          setPolandCases(response.data['Poland']);
        })

  },[])
  return (
    <div className="App">
      <GlobalStyle/>
    </div>
  );
}

export default App;
