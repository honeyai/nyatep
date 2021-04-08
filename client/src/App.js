import React from 'react';
import './App.css';
import HeroSlideshow from './components/HeroSlideShow/HeroSlideshow';
import YearlyInfo from './components/yearlyinfo/YearlyInfo';
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <HeroSlideshow />
      <Map />
    </div>
  );
}

export default App;
