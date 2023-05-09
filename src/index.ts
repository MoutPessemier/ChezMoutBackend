import './config/environment';
import http, { Server } from 'http';
import express, { Express, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './database/index';
import foodRoutes from './services/food.service';

const startServer = async () => {
  try {
    const app: Express = express();
    const routes = Router();
    app.use(bodyParser.json());
    app.use(cors({ origin: true }));
    app.use(routes);
    routes.get('/', (req, res) => res.send('OK'));
    routes.use('/', foodRoutes);
    const httpServer: Server = http.createServer(app);
    httpServer.listen(process.env.PORT, async () => {
      console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
    });

    const shutdown = async () => {
      await new Promise(resolve => httpServer.close(() => resolve(0)));
      await sequelize.close();
      if (process.env.NODE_ENV === 'test') return;
      process.exit(0);
    };
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
    process.on('SIGQuit', shutdown);
  } catch (e) {
    console.log('Error on startServer:: ', e);
  }
};

startServer();
