import React from 'react';

export default function DropDown(props) {
   return (
      <>
         <label>{props.dropDown.label}</label>
         <select
            name={props.dropDown.name}
            value={props.dropDown.defaultValue}
            onChange={props.onChange}
         >
            {props.dropDown.opts.map(opt => 
               <React.Fragment key={opt.value}>
                  <option value={opt.value}>{opt.label}</option>
               </React.Fragment>
            )}
         </select>
      </>
   )
};
