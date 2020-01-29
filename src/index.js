import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PoemInput from "./components/PoemInput";
import usePoemState from "./js/usePoemState";
import MakePoem from "./components/MakePoem";
import no from "./no";

const App = () => {
  const { line, addLine } = usePoemState([]);
  return (
    <div className="App">
      <div>
        <text className="overskrift">{no.makePoemsLikeTrygve}</text>
      </div>
      <PoemInput saveLine={addLine} />
      <MakePoem lines={line} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
