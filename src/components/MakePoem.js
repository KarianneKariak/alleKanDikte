import React, { useState } from "react";
import classNames from "classnames";
import Backgrounds from "./Backgrounds";
import AlignPoem from "./AlignPoem";

const MakePoem = ({ lines, deleteLines }) => {
  const [color, setColor] = useState("");
  const [align, setAlign] = useState("");

  return (
    <>
      <div className={"wrapperValg"}>
        <div className="wrapValg">
          <Backgrounds
            blue={() => setColor("blue")}
            red={() => setColor("red")}
            grey={() => setColor("grey")}
          />
          <AlignPoem
            center={() => setAlign("center")}
            left={() => setAlign("left")}
            right={() => setAlign("right")}
          />
        </div>
      </div>
      <div className="overskrift">Diktet vil dukke opp her: </div>
      <div className="ramme">
        <div
          className={classNames({
            dikt: lines.length > 0,
            red: lines.length > 0 && color === "red",
            blue: lines.length > 0 && color === "blue",
            grey: lines.length > 0 && color === "grey",
            center: lines.length > 0 && align === "center",
            left: lines.length > 0 && align === "left",
            right: lines.length > 0 && align === "right"
          })}
        >
          {lines.map((line, index) => (
            <>
              <div>
                <button onClick={() => deleteLines(index)}>
                  <text className={"vanligFarge"}> {line} </text>
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MakePoem;
