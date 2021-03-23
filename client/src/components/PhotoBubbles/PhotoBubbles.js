import React from 'react';
import "./photoBubbles.css";

const PhotoBubbles = () => {

  /* Beyond MVP */
    /* Dynamic Photo bubbles, brainstorm */
        /* thru css? similarily done like the accordions */
          /* - make css 'templates' */
          /* randomly assign the bubble the css */
  /* For now make the bubbles to fit statically >> probably flex so that each sized content can push the others around making it look more dynamic than it is */
  return (
    <div>
      {/* twelve circles */}
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
      <div className="photoBubble"></div>
    </div>
  );
};

export default PhotoBubbles;

