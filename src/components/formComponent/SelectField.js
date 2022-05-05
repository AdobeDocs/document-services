import React from "react";

const SelectField = React.forwardRef((props, ref) => {
  const {
    label = "",
    id = "",
    options = [],
    className = "",
    onChange = () => { },
    value = "",
    textClassName = "",
    errorMsg = "",
    required = true,
    onBlur = () => { },
    initialText = "Please select",
    initialOption,
    enableFirstOption = false
  } = props;
  let defaultOption = [
    {
      label: initialOption ?? initialText,
      value: "",
    },
  ];
  return (
    <div className="form-group selectContainer">
      <div className={`label font-weight-bold text-white ${textClassName}`}>{label}</div>
      <select
        id={id}
        name={id}
        className={`form-control custom-select w-100 ${className}`}
        value={value}
        onChange={onChange}
        required={required}
        onBlur={onBlur}
      >
        {[...defaultOption, ...options].map((option, key) => {
          return (
            <option
              className={`custom-option`}
              key={key}
              disabled={key === 0 && !enableFirstOption ? true : false}
              value={option.value}
              selected
            >
              {option.label}
            </option>
          );
        })}
      </select>
      <div className="invalid-feedback"> {errorMsg} </div>
    </div>
  );
});

export default SelectField;