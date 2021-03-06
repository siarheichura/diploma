import "./App.css";

import React, { MouseEvent, useState } from "react";
import { RootRouter } from "./router/RootRouter";

import { BackgroundIcons } from "./components/BackgroundIcons";
import { SocMediaLinks } from "./components/SocMediaLinks";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const x = (window.innerWidth - event.pageX * 3) / 50;
    const y = (window.innerHeight - event.pageY * 3) / 50;
    setX(x);
    setY(y);
  };

  return (
    <Provider store={store}>
      <div className="App" onMouseMove={(event) => onMouseMove(event)}>
        <div className="contentWrapper">
          <BackgroundIcons x={x} y={y} />
          <SocMediaLinks />
          <RootRouter />
        </div>
      </div>
    </Provider>
  );
}

export default App;
