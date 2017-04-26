import express from 'express';
import data from '../src/clay';

const router = express.Router();
const items = data.items.reduce((object, item) => {
	object[item.id] = item;
	return object;
}, {});

router.get('/items', (request, response) => {
	response.send({
		items: items
	});
});

router.get('/items/:itemId', (request, response) => {
	let item = items[request.params.itemId];
	response.send(item);
});

export default router;
