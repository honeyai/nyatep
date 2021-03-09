import React, { useState } from 'react';
import './App.css';
import YearlyBanner from './components/YearlyBanner';
import Year2020Stats from './components/Year2020Stats';
import Year2019Stats from './components/Year2019Stats';
import Year2018Stats from './components/Year2018Stats';

function App() {
  const [bannerView, setBannerView] = useState('year-2020');

  function changeBannerView(e) {
    const name = e.target.getAttribute("name");
    setBannerView(name);
  }

  function getBannerView() {
    switch(bannerView) {
      case 'year-2020':
        return <Year2020Stats />
      case 'year-2019':
        return <Year2019Stats />
      case 'year-2018':
        return <Year2018Stats />
      default:
        return <Year2020Stats />
    }
  }

  return (
    <div>
      <YearlyBanner changeBannerView={ changeBannerView } />
      { getBannerView() }
    </div>
  );
}

export default App;
