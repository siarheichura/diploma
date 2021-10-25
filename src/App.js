import "./App.css";
import { useState } from "react";

import { BackgroundIcon } from "./components/BackgroundIcon";
import { SocMedia } from "./components/SocMedia";

import { RootRouter } from "./router/RootRouter";

import { StickerShopModal } from "./components/StickerShopModal";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleListener = (event) => {
    const x = (window.innerWidth - event.pageX * 3) / 50;
    const y = (window.innerHeight - event.pageY * 3) / 50;
    setX(x);
    setY(y);
  };

  return (
    <div className="App" onMouseMove={(event) => handleListener(event)}>
      <BackgroundIcon x={x} y={y} />
      <SocMedia />
      <RootRouter />
      <StickerShopModal />
    </div>
  );
}

export default App;
