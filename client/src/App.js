import React from 'react';
import './App.css';
import Slideshow from './components/Slideshow';
import YearlyInfo from './components/yearlyinfo/YearlyInfo';
import YearlyBanner from './components/yearlyinfo/YearlyInfo';

function App() {
  return (
    <div className="App">
      <Slideshow />
      <YearlyInfo />
    </div>
  );
}

export default App;
