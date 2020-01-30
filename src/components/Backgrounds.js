import React from "react";
import PropTypes from "prop-types";
import no from "../no";

const Backgrounds = ({ red, blue, grey }) => (
    <div className={"alignPoem_wrapper"}>
    <div className={"heading"}>{no.selectBackground}</div>
    <div>
      <label className={"container"}>
        <input
          type="radio"
          onChange={red}
          name="color"
          className="radio_button"
        />
        <span className="checkmark" />
        {no.red}
      </label>
      <label className={"container"}>
        <input
          type="radio"
          onChange={blue}
          name="color"
          className="radio_button"
        />
        <span className="checkmark" />
        {no.blue}
      </label>
      <label className={"container"}>
        <input
          type="radio"
          onChange={grey}
          name="color"
          className="radio_button"
        />
        <span className="checkmark" />
        {no.grey}
      </label>
    </div>
  </div>
);

Backgrounds.propTypes = {
  red: PropTypes.func,
  blue: PropTypes.func,
  grey: PropTypes.func
};

export default Backgrounds;
