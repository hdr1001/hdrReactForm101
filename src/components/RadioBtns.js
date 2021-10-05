import React from 'react';

export default function RadioButtons(props) {
   return (
      <>
         <label>{props.radioButtons.label}</label>
         {props.radioButtons.opts.map((opt, idx) =>
            <React.Fragment key={opt.value}>
               <input
                  type='radio'
                  name={props.radioButtons.name}
                  id={opt.name}
                  value={opt.value}
                  onChange={props.onChange}
                  checked={opt.value === props.radioButtons.defaultValue}
               />
               <label
                  htmlFor={opt.name}
                  className='rhs'
               >
                  {opt.label}
               </label>
               {(idx < props.radioButtons.opts.length - 1) && <label>&nbsp;</label>}
            </React.Fragment>
         )}
      </>
   )
};
