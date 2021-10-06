import React from 'react';

export default function CheckBoxes(props) {
   return (
      <>
         <label>{props.checkBoxes.label}</label>
         {props.checkBoxes.opts.map((chkBox, idx) => 
            <React.Fragment key={chkBox.name}>
               <input type='checkbox'
                  name={chkBox.name}
                  id={chkBox.name}
                  checked={chkBox.checked}
                  onChange={props.onChange}
               />
               <label htmlFor={chkBox.name} className='rhs'>
                  {chkBox.label}
               </label>
               {(idx < props.checkBoxes.opts.length - 1) && <label>&nbsp;</label>}
            </React.Fragment>
         )}
      </>
   )
};
