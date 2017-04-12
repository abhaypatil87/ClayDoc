import React from 'react';
import ReactDOM from 'react-dom';
import data from './clay';
import App from './components/App';

ReactDOM.render(
	//React.createElement('div', {className: 'row'}, 'Welcome to ClayDone!'),
	<App data={data.content}/>,
	document.getElementById('root')
);
