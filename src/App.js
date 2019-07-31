import React from "react";
import "./styles.scss";
import { Provider } from "react-redux";
import store from "./store";
import Players from "./components/Players";
import Team from "./components/Team";

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Futball Manager</h1>
        <Players />
        <Team />
      </main>
    </Provider>
  );
};

export default App;
