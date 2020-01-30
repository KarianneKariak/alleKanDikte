import React from "react";
import PropTypes from "prop-types";
import no from "../no";

const AlignPoem = ({ left, center, right }) => (
  <div className={"alignPoem_wrapper"}>
    <div className={"heading"}>{no.alignText}</div>
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
  </div>
);

AlignPoem.propTypes = {
  left: PropTypes.func,
  center: PropTypes.func,
  right: PropTypes.func
};

export default AlignPoem;
