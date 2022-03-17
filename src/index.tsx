import React from "react";
import ReactDOM from "react-dom";
import { HolaMundoComponent } from "./holaMundoComponent";

console.log("API_BASE Value: ",process.env.API_BASE);
ReactDOM.render(
    <div>
      <HolaMundoComponent />
    </div>,
    document.getElementById("root")
  );