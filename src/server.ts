import express, { urlencoded } from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from '../routes/api';
import helmet from 'helmet';

const server = express();

// Use Helmet to enhance the app's security
server.use(helmet());

// Enable CORS (Cross-Origin Resource Sharing)
server.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
server.use(urlencoded({ extended: true }));

// Disable the 'X-Powered-By' header to make the app less identifiable
server.disable('x-powered-by');

// Parse incoming JSON requests
server.use(express.json());

// Use the defined routes from the router
server.use(router);

// Get the port from environment variables or default to 4000
const port = process.env.PORT || 4000;

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
