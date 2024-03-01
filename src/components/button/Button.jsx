import React from 'react'
import "./Button.css"
function Button(props) {
  return (
    <div>
        <button onClick={props.onClick} >{props.btn}</button>
    </div>
  )
}

export default Button