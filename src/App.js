import "./App.css";
import { useState } from "react";

import { NavBar } from "./NavBar";
import { BackgroundIcon } from "./BackgroundIcon";
import { MainInfo } from "./MainInfo";
import { SocMedia } from "./SocMedia";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleListener = (event) => {
    const x = (window.innerWidth - event.pageX * 3) / 50;
    const y = (window.innerHeight - event.pageY * 3) / 50;
    setX(x);
    setY(y);
    // setTransform(`translateX(${x}px) translateY(${y}px)`);
  };

  return (
    <div
      className="App"
      onMouseMove={(event) => handleListener(event)}
      // style={{ transform }}
    >
      <NavBar />
      <BackgroundIcon x={x} y={y} />
      <MainInfo />
      <SocMedia />
    </div>
  );
}

export default App;
