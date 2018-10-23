import Hapi from 'hapi';
import firebase from 'firebase';
import dotenv from 'dotenv';
import { config } from './config/firebase';

dotenv.config();
firebase.initializeApp(config);

const server = Hapi.server({
  port: process.env.PORT,
  host: process.env.HOST,
});

const init = async () => {
  await server.start();
  process.stdout.write(`server running on port ${process.env.PORT}\n`);
};

process.on('unhandledRejection', (err) => {
  process.stderr.write(err);
  process.exit(1);
});

init();
