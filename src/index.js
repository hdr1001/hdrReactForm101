import React from 'react';
import ReactDOM from 'react-dom';

import Form101 from './components/Form101';

import './css/main.css';

const iniStateForm = {
   txtName: 'James Bond',
   txtAlias: '007',
   txtAdr: '',
   txtCity: '',
   pwdCode: '',
   optGender: 'M',
   chkWater: false,
   chkIce: false,
   chkShaken: true,
   ddMenuChoice: 's'
}

ReactDOM.render(<Form101 iniState={iniStateForm} />, document.getElementById('root'));
