import Hapi from 'hapi';
import firebase from 'firebase';
import dotenv from 'dotenv';
import { config } from './config/firebase';
import Users from './controllers/Users';

dotenv.config();

firebase.initializeApp(config);

const server = Hapi.server({
  port: process.env.PORT,
  host: process.env.HOST,
});

server.route({
  method: 'POST',
  path: '/api/v1/users/signup',
  handler: (request, reply) => Users.createUser(request.payload),
});

const init = async () => {
  await server.register({
    plugin: require('hapi-bodyparser'),
    options: {
      parser: { allowDots: true, strictNullHandling: true },
      sanitizer: {
        trim: true,
        stripNullorEmpty: true,
      },
      merge: false,
      body: false,
    },
  });

  await server.start();
  process.stdout.write(`server running on port ${process.env.PORT}\n`);
};

process.on('unhandledRejection', (err) => {
  process.stderr.write(err);
  process.exit(1);
});

init();
