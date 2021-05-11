import 'dotenv/config';

export const PORT = process.env.PORT ? parseInt(process.env.PORT!, 10) : 3000;
export const BASE_URL = process.env.BASE_URL || '/api';
