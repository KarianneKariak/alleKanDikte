import React from "react";
import PropTypes from "prop-types";

const Backgrounds = ({ red, blue, grey }) => (
  <div>
    <div>Velg bakgrunn</div>
    <div>
      <label className={"container"}>
        <input
          type="radio"
          onChange={red}
          name="color"
          className="radio_button"
        />
        <span className="checkmark" />
        Rød
      </label>
      <label className={"container"}>
        <input
          type="radio"
          onChange={blue}
          name="color"
          className="radio_button"
        />
        <span className="checkmark" />
        Blå
      </label>
      <label className={"container"}>
        <input
          type="radio"
          onChange={grey}
          name="color"
          className="radio_button"
        />
        <span className="checkmark" />
        Grå
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
