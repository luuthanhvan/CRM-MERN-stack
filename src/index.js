import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		{/* Wrap the top-level component with BrowserRouter element 
			to use the routing for all componenents in the app */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
