import express from 'express';
import cors from 'cors';
import router from './routes';
import { MongoClient } from 'mongodb';

async function bootstrap() {
  const port = 3000;

  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(router);

  app.listen(port, (): void => console.log('server is running!'));
}

bootstrap();
