import firebase from 'firebase';

export default class Users {
  static signIn(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch(error => console.log(error));
  }

  static createUser(user) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((createdUser) => {
        console.log(JSON.stringify(createdUser));
      })
      .catch(err => ({ errorCode: err.code, errorMessage: err.message }));
  }
}
