import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './VirtualOfficeRouter'
import App from './App';
import Task_Dashboard from '././pages/Task_Dashboard/Task_Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
