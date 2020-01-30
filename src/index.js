import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PoemInput from "./components/PoemInput";
import usePoemState from "./js/usePoemState";
import MakePoem from "./components/MakePoem";
import no from "./no";
import { FaChevronDown } from "react-icons/all";

const App = () => {
  const { line, addLine, deleteLines } = usePoemState([]);
  return (
    <div className="App">
      <div className="main_heading">
        <text>{no.makePoemsLikeTrygve}</text>
      </div>
      <PoemInput saveLine={addLine} />
      <MakePoem lines={line} deleteLines={deleteLines} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
