import React from 'react'

const InputField = ({label, value, type, onChange,placeholder, maxLength}) => {
  return (
    <div>
        <label>{label}</label>
        <input 
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        />

    </div>
  )
}

export default InputField;