import React from 'react';

export default class Form101 extends React.Component {
   constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
   }
  
   handleSubmit(event) {
      alert('Submit clicked 🙂');
      event.preventDefault();
   }

   render() {
      return (
         <form
            onSubmit={this.handleSubmit}
         >

            <input type='submit' value='Submit' />
      
         </form>
      )
   }
}
