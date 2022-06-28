import * as React from "react"

const ButtonField = (props) => {
  const { className = "", name = "", type = "button", id = "", onClick = () => { }, fieldName = "", disabled = false, to = "" } = props

  const onClickBtn=(e)=>{
    e.preventDefault()
    return onClick()
  }

  return (
    <div className="buttonContainer">
        <button type={type} name={fieldName} id={id} className={`btn ${className}`} onClick={onClick} disabled={disabled} >{name}</button>
    </div>
  );
}

export default ButtonField;