import React from 'react';
import ReactDOM from 'react-dom';

import Form101 from './components/Form101';

const iniStateForm = {
   txtName: "James Bond"
}

ReactDOM.render(<Form101 iniState={iniStateForm} />, document.getElementById('root'));
