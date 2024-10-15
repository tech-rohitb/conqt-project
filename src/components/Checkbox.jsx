import React from "react";

const Checkbox = ({label, checked, onChange}) => {
  return (
    <div>
      <label>
      <input 
      type="checkbox"
      checked={checked} onChange={onChange}
      >
      </input>
      {label}

      </label>
    </div>
  );
};

export default Checkbox;
