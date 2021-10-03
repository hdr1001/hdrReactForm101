import React from 'react';
import ReactDOM from 'react-dom';

import Form101 from './components/Form101';

const iniStateForm = {
   txtName: 'James Bond',
   txtAlias: '007',
   txtAdr: '',
   txtCity: '',
   pwdCode: ''
}

ReactDOM.render(<Form101 iniState={iniStateForm} />, document.getElementById('root'));
