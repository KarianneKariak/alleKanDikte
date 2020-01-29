import React from "react";
import PropTypes from "prop-types";

const AlignPoem = ({ left, center, right }) => (
  <div>
    <div>Juster tekst</div>

    <div>
      <label className="container">
        <input
          type="radio"
          onChange={left}
          name="align"
          className="radio_button"
        />
        <span className="checkmark" />
        Venstre
      </label>
      <label className="container">
        <input
          type="radio"
          onChange={center}
          name="align"
          className="radio_button"
        />
        <span className="checkmark" />
        Sentrert
      </label>
      <label className="container">
        <input
          type="radio"
          onChange={right}
          name="align"
          className="radio_button"
        />
        <span className="checkmark" />
        Høyre
      </label>
    </div>
  </div>
);

AlignPoem.propTypes = {
  left: PropTypes.func,
  center: PropTypes.func,
  right: PropTypes.func,
};

export default AlignPoem;
