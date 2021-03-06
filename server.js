import config, {nodeEnv} from './config.js';
import http from 'http';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const expressServer = express();

expressServer.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public'),
	debug: true
}));
expressServer.set('view engine', 'ejs');
import serverRender from './serverRender';
expressServer.get('/', (request, response) => {
	serverRender()
	.then(({initialMarkup, initialData}) => {
		response.render('index', {
			initialMarkup,
			initialData
		});
	})
	.catch(console.error("Something went wrong. Server.js."));
});

// expressServer.get('/about', (request, response) => {
// 	//response.send("Hellow, my name is Abhay!");
// 	fs.readFile('public/about.html', (error, data) => {
// 		response.send(data.toString());
// 	});
// });

expressServer.use('/api', apiRouter);
/* This line matches the URL and fetches the same from the public folder */
expressServer.use(express.static('public'));

expressServer.listen(config.port, config.host, () => {
	console.log("Express Server is listening on " + config.port);
});

/*const server = http.createServer((request, response) => {
	response.write('Hellow World!\n');
	setTimeout(() => {
		response.write('I can stream!\n');
		response.end();
	}, 1000);
});
server.listen(8080);
/*
server.on('request', (request, response) => {
	response.write('Hellow World!\n');
	setTimeout(() => {
		response.write('I can stream!\n');
		response.end();
	}, 1000);
});
*/
