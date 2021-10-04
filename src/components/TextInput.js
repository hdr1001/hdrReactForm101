import React from 'react'

export default function TextInput(props) {
   return (
      <>
         <label htmlFor={props.name}>{props.label}</label>
         <input
            type={props.hasOwnProperty('type') ? props.type : 'text'}
            name={props.name}
            value={props.value}
            onChange={props.onChange ? props.onChange : null}
            readOnly={props.hasOwnProperty('readOnly')}
            maxLength={props.hasOwnProperty('maxLength') ? props.maxLength : null}
         />
      </>
   )
}
