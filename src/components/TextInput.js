import React from "react"

export default function TextInput(props) {
   return (
      <>
         <label htmlFor={props.name}>{props.label}</label>
         <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
         />
      </>
   )
}
