import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PoemInput from "./components/PoemInput";
import usePoemState from "./js/usePoemState";
import MakePoem from "./components/MakePoem";

const App = () => {
  const { line, addLine } = usePoemState([]);
  return (
    <div className="App">
      <div>
        <text className="overskrift">Lag Trygve Skaug inspirerte dikt</text>
      </div>
      <PoemInput saveLine={addLine} />
      <MakePoem lines={line} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
