var admin = require("firebase-admin");
const serviceAccount = require('../../key/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
const db = admin.firestore();
  
export { db };

// module.exports = db;

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// import { initializeApp } from 'firebase-admin/app';
// const config = require('../config');

// const db = initializeApp(config.firebaseConfig);

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


// const db = initializeApp({
//     credential: admin.credential.cert(config.firebaseConfig)
//   });
  
//   const db = getFirestore();