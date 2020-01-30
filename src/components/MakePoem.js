import React, { useState } from "react";
import classNames from "classnames";
import Backgrounds from "./Backgrounds";
import AlignPoem from "./AlignPoem";

const MakePoem = ({ lines, deleteLines }) => {
  const [color, setColor] = useState("");
  const [align, setAlign] = useState("");
  const [openBackground, setOpenBackground] = useState(false);
  const [openAlignment, setOpenAlignment] = useState(false);

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
      <div className="main_heading">Diktet vil dukke opp her: </div>
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
