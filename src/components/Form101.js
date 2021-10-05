import React from 'react';
import TextInput from './TextInput';
import RadioButtons from './RadioBtns';
import CheckBoxes from './CheckBoxes';

export default class Form101 extends React.Component {
   constructor(props) {
      super(props);

      this.state = { ...props.iniState };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }
  
   handleSubmit(event) {
      alert('Submit ' + JSON.stringify(this.state) + ' 🙂');

      event.preventDefault();
   }

   handleChange(event) {
      const name = event.target.name;

      if (event.target.type === 'checkbox') {
         this.setState((prevState, props) => 
            ({ [name]: event.target.checked })
         )
      }
      else {
         this.setState((prevState, props) =>
            ({ [name]: event.target.value })
         )
      }
   }
   
   render() {
      const radioButtons = {
         name: 'optGender',
         label: 'Gender',
         defaultValue: this.state.optGender,
         opts: [
            {
               name: 'optMale',
               value: 'M',
               label: 'Male'
            },{
               name: 'optFemale',
               value: 'F',
               label: 'Female'
            } /* ,{
               name: 'optUnknown',
               value: 'U',
               label: 'Unknown'
            } */
         ]
      };

      const checkBoxes = {
         label: 'Options',
         opts: [
            {
               name: 'chkWater',
               checked: this.state.chkWater,
               label: 'Water'
            },{
               name: 'chkIce',
               checked: this.state.chkIce,
               label: 'Ice'
            },{
               name: 'chkShaken',
               checked: this.state.chkShaken,
               label: 'Shaken'
            }
         ]
      };

      return (
         <form
            onSubmit={this.handleSubmit}
         >
            <fieldset>
               <h2>Form elements example</h2>

               <div className='elementGrp'>
                  <TextInput label='Name' name='txtName'
                     value={this.state.txtName}
                     onChange={this.handleChange}
                  />

                  <TextInput label='Alias' name='txtAlias'
                     value={this.state.txtAlias}
                     readOnly
                  />

                  <TextInput label='Address' name='txtAdr'
                     value={this.state.txtAdr}
                     onChange={this.handleChange}
                     maxLength={64}
                  />

                  <TextInput label='City' name='txtCity'
                     value={this.state.txtCity}
                     onChange={this.handleChange}
                  />

                  <TextInput type='password' label='Secret code'
                     name='pwdCode' value={this.state.pwdCode}
                     onChange={this.handleChange}
                  />
               </div>

               <div className='elementGrp'>
                  <RadioButtons radioButtons={radioButtons} onChange={this.handleChange} />
               </div>

               <div className='elementGrp'>
                  <CheckBoxes checkBoxes={checkBoxes} onChange={this.handleChange} />
               </div>

               <div className='elementGrp'>
                  <input type='submit' value='Submit' />
               </div>
            </fieldset>
         </form>
      );
   }
}
