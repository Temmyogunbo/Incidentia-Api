import mongoose from 'mongoose';

if (process.env.NODE_ENV === 'development') {
  mongoose.connect('mongodb://127.0.0.1:27017/incidencias');
} else if (process.env.NODE_ENV === 'production') {
  mongoose.connect(
    `mongodb+srv://temmyogunbo:${
      process.env.MONGODB_ATLAS_PW
    }@temmyogunb-vqhsp.mongodb.net/incidencias?retryWrites=true`,
  );
} else if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://127.0.0.1:27017/incidencias-test');
}
const db = mongoose.connection;

db.on('error', () => process.stdout.write('A database error occured\n'));
db.once('open', () => process.stdout.write('A database connection made\n'));

export default db;
