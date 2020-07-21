import React, { useState } from "react";
import "./App.css";

function App({ size, stroke }) {
  const [progress, setProggres] = useState(10);

  const changeState = () => {
    setProggres(progress + 20);
  };

  const normalizedSize = () => {
    return size - 12 * 2;
  };

  const radius = () => {
    // calc radius

    const actualSize = normalizedSize() / 2;
    return actualSize - stroke * 2;
  };

  const normalizedProgress = () => {
    return progress <= 0 ? 0 : progress >= 100 ? 100 : progress;
  };

  const circumf = () => {
    return 2 * Math.PI * radius();
  };

  const strokeDashOffset = () => {
    const circ = circumf();

    return circ - (normalizedProgress() / 100) * circ;
  };

  const strokeDashArray = () => {
    const cir = circumf();
    return `${cir} ${cir}`;
  };

  return (
    <div className="App">
      <div
        className="icon__wrapper"
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <svg height={normalizedSize()} width={normalizedSize()}>
          <circle
            cx={normalizedSize() / 2}
            cy={normalizedSize() / 2}
            r={radius()}
            style={{ strokeDashoffset: strokeDashOffset() }}
            strokeDasharray={strokeDashArray()}
            strokeWidth={stroke}
          />
        </svg>
        <div className="icon__text" style={{ fontSize: `${radius() - 12}px` }}>
          {normalizedProgress()}
        </div>

        <button className="btn-toggle" onClick={changeState}>
          toggle
        </button>
      </div>
    </div>
  );
}

export default App;
