import React from 'react';
import TextInput from './TextInput';

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

      this.setState({
         [name]: event.target.value
       });

      event.preventDefault();
   }

   render() {
      return (
         <form
            onSubmit={this.handleSubmit}
         >
            <fieldset>
               <h2>Form elements example</h2>

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

               <input type='submit' value='Submit' />

            </fieldset>
         </form>
      )
   }
}
