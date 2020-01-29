import React from "react";
import useInputState from "../js/useInputState";
import no from "../no";

const PoemInput = ({ saveLine }) => {
  const { value, onChange, reset } = useInputState([]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveLine(value);
        reset();
      }}
    >
      <input
        onChange={onChange}
        value={value}
        placeholder={no.whatIsOnYourHeart}
        className="input_field"
      />
    </form>
  );
};

export default PoemInput;
