import userSchema from '../schema/userSchema';
import UsersController from '../controllers/UserController';

export const register = (plugin) => {
  plugin.route([
    {
      method: 'POST',
      path: '/users/signup',
      handler: request => UsersController.createUser(request.payload),
      options: {
        validate: {
          payload: userSchema,
        },
        auth: false
      },
    },
    {
      method: 'POST',
      path: '/users/signin',
      handler: request => UsersController.signIn(request.payload),
      options: {
        validate: {
          payload: userSchema,
        },
        auth: false
      },
    },
  ]);
};

export const name = 'users';
export default register;
