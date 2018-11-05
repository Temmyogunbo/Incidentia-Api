import bcrypt from 'bcrypt';
import Boom from 'boom';
import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

usersSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) throw new err();
    user.password = hash;
    next();
  });
});

usersSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(Boom.conflict('Email already exists'));
  }
  next();
});

usersSchema.methods = {
  comparePassword(userPassword, hash) {
    return bcrypt.compareSync(userPassword, hash);
  },
};

export const Users = mongoose.model('Users', usersSchema);

export default Users;
