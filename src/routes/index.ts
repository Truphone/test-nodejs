import { Express } from 'express';
import healthRoute from './health';

const routes = [
  healthRoute,
];

function addRoutes(app: Express) {
  routes.forEach(route => route(app));
}

export { addRoutes };
