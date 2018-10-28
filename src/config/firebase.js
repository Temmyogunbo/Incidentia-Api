import dotenv from 'dotenv';

dotenv.config();

export const config = {
  production: {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGDSENDERID,
  },
  development: {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGDSENDERID,
  },
  test: {
    apiKey: process.env.TEST_APIKEY,
    authDomain: process.env.TEST_AUTHDOMAIN,
    databaseURL: process.env.TEST_DATABASEURL,
    projectId: process.env.TEST_PROJECTID,
    storageBucket: process.env.TEST_STORAGEBUCKET,
    messagingSenderId: process.env.TEST_MESSAGINGDSENDERID,
  },
};
