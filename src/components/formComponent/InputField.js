import React from "react";

const InputField = React.forwardRef((props, ref) => {
  const { maxLength = "50", pattern, placeholder = "", label = "", className = "form-control rounded-0", type = "text", autoComplete = "off", errorMsg = "", onChange = () => { }, value = "", id = "", onBlur = () => { }, rows = "4", cols = "50", name = "", textAreaPlaceholder = "", areaClassName = "", required = false, labelClassName = "", divClassName ="" } = props
  return (
    <>
      {type === "text" || type === "email" || type === "number" ? <div className="inputContainer">
        <div>
          <label className={labelClassName}>{label}</label>
        </div>
        <input ref={ref} type={type} id={id} value={value} pattern={pattern} placeholder={placeholder} maxLength={maxLength} className={className} autoComplete={autoComplete} required={true} onChange={onChange} onBlur={onBlur} />
        <div className="invalid-feedback">
          {errorMsg}
        </div>
      </div>
        :
        <div  className= {divClassName ? divClassName : 'area-container'}>
          <div>
            <label className={labelClassName}>{textAreaPlaceholder}</label>
          </div>
          <textarea rows={rows} cols={cols} id={id} value={value} onChange={onChange} placeholder={placeholder} name={name} className={areaClassName} />
          <div className="invalid-feedback">
            {errorMsg}
          </div>
        </div>
      }
    </>
  );
})

export default InputField;