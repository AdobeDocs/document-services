import * as React from "react"

const CheckBoxField = React.forwardRef((props, ref) => {
  const { pattern, placeholder = "", className = "form-control rounded-0", type = "checkbox", required = false, onChange = () => { }, value = " ", id = "", name = "", onBlur = () => { }, disabled = false ,checked=false} = props
  return (
    <div className="inputContainer">{
      <input ref={ref} type={type} id={id} name={name} value={value} pattern={pattern} className={className} required={required} onChange={onChange} onBlur={onBlur} disabled={disabled} checked={checked} />
    }
    </div>
  );

})

export default CheckBoxField;