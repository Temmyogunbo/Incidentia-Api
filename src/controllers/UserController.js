import Boom from 'boom';
import { Users } from '../models/users';
import { createToken } from '../helper/validator';

export default class UsersController {
  static signIn(user) {
    const { email, password } = user;
    return Users.findOne({ email })
      .exec()
      .then((result) => {
        if (!Users.schema.methods.comparePassword(password, result.password)) {
          return Boom.unauthorized('Please check your password again');
        }
        const { _id } = result;

        if (result) {
          return {
            _id,
            email,
            token: createToken({ _id, email }),
          };
        }

        return Boom.unauthorized('Invalid password/email');
      })
      .catch(err => Boom.serverUnavailable(err));
  }

  static async createUser(user) {
    const { email, password } = user;
    return Users.create({ email, password })
      .then((result) => {
        const { _id } = result;
        return {
          _id,
          email,
          token: createToken({ _id, email }),
        };
      })
      .catch(err => Boom.serverUnavailable(err));
  }
}
