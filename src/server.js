import Glue from 'glue';
import hapiAuthJW from 'hapi-auth-jwt2';
import { manifest, options } from './manifest';
import { validateUser } from './helper/validator';
import db from './database';

export const init = async (start) => {
  try {
    const server = await Glue.compose(
      manifest,
      options,
    );
    await server.register(hapiAuthJW);

    server.auth.strategy('jwt', 'jwt', {
      key: process.env.SECRET_KEY,
      validate: await validateUser,
      verifyOptions: {
        algorithms: ['HS256'],
      },
    });

    server.auth.default('jwt');

    if (!start) return server;

    await server.start();
    process.stdout.write(`server running on port ${process.env.PORT}\n`);
  } catch (err) {
    throw err;
  }
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

if (!module.parent) {
  init(true);
}

export default init;
