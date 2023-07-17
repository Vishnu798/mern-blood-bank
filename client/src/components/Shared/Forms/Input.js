import React from "react";

const Input = ({ value, onChange, name, labelText, inputType, labelFor }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};

export default Input;
