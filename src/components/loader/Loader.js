import React from 'react';

const Loader = () => {
  return (
    <div style={{
      background:"#F8F4E4",
      width:'100%',
      height:"100vh",
    }}>
      <svg  style={{margin: "auto", background:"#F8F4E4",  display: "block", shapeRendering: "auto"}} width="177px" height="250px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="#1d3f72" strokeWidth="5" r="20" strokeDasharray="94.24777960769379 33.41592653589793">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.8695652173913042s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>
    </div>
  );
};

export default Loader;