import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Inicio from "./Components/Inicio";
import Declaracion from "./Components/Declaracion";
import { Route, Switch } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Switch>
      <Route path="/">
        <Inicio />
      </Route>
      <Route path="/declaracion">
        <Declaracion />
      </Route>
    </Switch>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
