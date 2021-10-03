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
      alert('txtName ' + this.state.txtName + ' 🙂');

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
               <legend>Form elements example</legend>

               <TextInput
                  label='Name'
                  name='txtName'
                  type='text'
                  value={this.state.txtName}
                  onChange={this.handleChange}
               />

               <input type='submit' value='Submit' />

            </fieldset>
         </form>
      )
   }
}
