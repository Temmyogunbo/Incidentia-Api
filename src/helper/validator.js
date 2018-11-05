import jwt from 'jsonwebtoken';

export const createToken = user => jwt.sign(user, process.env.SECRET_KEY, {
    expiresIn: 3600 * 24,
  });

export const validateUser = async (decoded) => {
  if (decoded) {
    return { isValid: true };
  }
  return { isValid: false };
};
