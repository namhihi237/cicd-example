import app from './app';
import http from 'http';

import { config } from './config';
const PORT = config.get('port');

//Separate Express 'app' and 'server'
const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
