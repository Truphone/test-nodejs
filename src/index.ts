import express from 'express';
import { addRoutes } from './routes';

const PORT = process.env.PORT || 3000;

const app = express();

addRoutes(app);

app.listen(PORT, async () => {
  console.debug(`Listening on port ${PORT}`);
});
