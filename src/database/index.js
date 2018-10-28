import firebase from 'firebase';
import { config } from '../config/firebase';

firebase.initializeApp(config[process.env.NODE_ENV]);

export const db = firebase.database().ref('incidencias');
