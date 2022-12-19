import * as React from "react"

const RadioBoxField = React.forwardRef((props, ref) => {
  const { pattern, placeholder = "", className = "form-control rounded-0", type = "radio", required = false, onChange = () => { }, value = " ", id = "", name = "", onBlur = () => { }, disabled = false} = props
  return (
    <div className="inputContainer">{
      <input ref={ref} type={type} id={id} name={name} value={value}  className={className} required={required} onChange={onChange} onBlur={onBlur} disabled={disabled} />
    }
    </div>
  );

})

export default RadioBoxField;