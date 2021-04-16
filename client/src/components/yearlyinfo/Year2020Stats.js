import React from 'react';
import PhotoBubbles from '../PhotoBubbles/PhotoBubbles';

const importAll = file => {
  let images = {};
  return file.keys().map((item, index) => { images[item.replace('./', '')] = file(item);});
}

const images = importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/))

function Year2020Stats() {
  return (
    <div className="2020-yearly-stats-component">
      <h1>2020</h1>

      <PhotoBubbles images={images}/>

    </div>
  )
}

export default Year2020Stats;
