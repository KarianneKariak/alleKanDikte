import React, { useState } from "react";
import classNames from "classnames";
import Backgrounds from "./Backgrounds";
import AlignPoem from "./AlignPoem";
import no from "../no";

const MakePoem = ({ lines, deleteLines }) => {
  const [color, setColor] = useState("");
  const [align, setAlign] = useState("");
  const [openBackground, setOpenBackground] = useState(true);
  const [openAlignment, setOpenAlignment] = useState(true);

  return (
    <>
      <div className={"wrapper_choice"}>
        <div className="wrapper_choice_inner_wrapper">
          <Backgrounds
            blue={() => setColor("blue")}
            red={() => setColor("red")}
            grey={() => setColor("grey")}
            setOpen={() => setOpenBackground(!openBackground)}
            open={openBackground}
          />
          <AlignPoem
            center={() => setAlign("center")}
            left={() => setAlign("left")}
            right={() => setAlign("right")}
            setOpen={() => setOpenAlignment(!openAlignment)}
            open={openAlignment}
          />
        </div>
      </div>
      {lines.length > 0 && <div className="main_heading"> {no.yourPoem} </div>}
      <div className="poem_frame">
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
                  <text className={"regular_color"}> {line} </text>
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
