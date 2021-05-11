import express from 'express';
import { addRoutes } from './routes';
import { PORT } from './config';

const app = express();

addRoutes(app);

app.listen(PORT, async () => {
  console.debug(`Listening on port ${PORT}`);
});
