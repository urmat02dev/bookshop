import React from 'react';
const Loader = () => {
  return (
    <div style={{
      background:"#F8F4E4",
      width:'100%',
      height:"100vh",
      paddingTop:"50px"
    }}>
      <svg style={{margin: "auto", display: "block", shapeRendering: "auto",}} width="160px" height="184px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="35" cy="50" fill="#e6261f" r="15">
          <animate attributeName="cx" repeatCount="indefinite" dur="0.819672131147541s" keyTimes="0;0.5;1" values="35;65;35" begin="-0.4098360655737705s"></animate>
        </circle>
        <circle cx="65" cy="50" fill="#eb7532" r="15">
          <animate attributeName="cx" repeatCount="indefinite" dur="0.819672131147541s" keyTimes="0;0.5;1" values="35;65;35" begin="0s"></animate>
        </circle>
        <circle cx="35" cy="50" fill="#e6261f" r="15">
          <animate attributeName="cx" repeatCount="indefinite" dur="0.819672131147541s" keyTimes="0;0.5;1" values="35;65;35" begin="-0.4098360655737705s"></animate>
          <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="0.819672131147541s" repeatCount="indefinite"></animate>
        </circle>
        </svg>
    </div>
  );
};

export default Loader;