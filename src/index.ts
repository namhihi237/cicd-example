import app from './app';
import http, { Server } from 'http';

import { environment } from './config';
const PORT: number = environment.port;
//Separate Express 'app' and 'server'
const server: Server = http.createServer(app);
server.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.info(`Server is running on port ${PORT}`);
});
