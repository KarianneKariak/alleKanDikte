import React, { useState } from "react";
import classNames from "classnames";
import Backgrounds from "./Backgrounds";
import AlignPoem from "./AlignPoem";

const MakePoem = ({ lines }) => {
  const [color, setColor] = useState("");
  const [align, setAlign] = useState("");

  console.log(color);
  console.log(align);

  return (
    <>
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
          {lines.map(line => (
            <text className={"vanligFarge"}> {line} </text>
          ))}
        </div>
      </div>
    </>
  );
};

export default MakePoem;
