import React from "react";
import PropTypes from "prop-types";
import no from "../no";
import { FaChevronDown } from "react-icons/all";

const AlignPoem = ({ left, center, right, open, setOpen }) => (
  <div className={"alignPoem_wrapper"}>
    <button className={"heading"} onClick={setOpen}>
      {no.alignText} <FaChevronDown />
    </button>
    {open && (
      <div>
        <label className="container">
          <input
            type="radio"
            onChange={left}
            name="align"
            className="radio_button"
          />
          <span className="checkmark" />
          {no.left}
        </label>
        <label className="container">
          <input
            type="radio"
            onChange={center}
            name="align"
            className="radio_button"
          />
          <span className="checkmark" />
          {no.center}
        </label>
        <label className="container">
          <input
            type="radio"
            onChange={right}
            name="align"
            className="radio_button"
          />
          <span className="checkmark" />
          {no.right}
        </label>
      </div>
    )}
  </div>
);

AlignPoem.propTypes = {
  left: PropTypes.func,
  center: PropTypes.func,
  right: PropTypes.func,
  open: PropTypes.bool,
    setOpen:PropTypes.func
};

export default AlignPoem;
