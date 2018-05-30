import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
