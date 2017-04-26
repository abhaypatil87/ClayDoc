import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import axios from 'axios';
import config from './config';

const serverRender = () =>
	axios.get(`${config.serverURL}/api/items`)
		.then(response => {
			return {
				initialMarkup: ReactDOMServer.renderToString(
				<App initialItems={response.data.items}/>),
				initialData: response.data
			};
		})
		.catch(console.error("Something went wrong."));

export default serverRender;
