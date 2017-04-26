import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App initialItems={window.initialData.items}/>, document.getElementById('root'));
