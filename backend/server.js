// backend/server.js
// required modules imported
import express from 'express';
import bodyParserPackage from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// required file imported
import router from './routes/PostsRouter.js';

dotenv.config();

const { json } = bodyParserPackage;
const port = process.env.PORT;

// disabled the issuer certificate check  for third party api
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const app = express();

// Middlewares for json parser and cors
app.use(json());
app.use(cors());

// Route for /api to route to routes/PostsRouter
app.use('/api', router);

// Start server on configured port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
