import React from "react";

const Input = ({value,onChange,name}) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
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
