import React from 'react';

function YearlyBanner({ changeBannerView }) {
  return (
    <div>
      <ul onClick={ changeBannerView }>
        <li id="year-2020" name="year-2020">
           2020
        </li>

        <li id="year-2019" name="year-2019">
          2019
        </li>

        <li id="year-2018" name="year-2018">
          2018
        </li>
      </ul>
    </div>
  )
}

export default YearlyBanner;
