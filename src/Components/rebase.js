

var Rebase = require('re-base');
var firebase = require('firebase');
// require('firebase/auth');
var app = firebase.initializeApp({
  apiKey: "AIzaSyCkfTbXnhgQtmWZazhpifb3sygpR4LcymU",
      authDomain: "shopredux-c947a.firebaseapp.com",
      databaseURL: "https://shopredux-c947a.firebaseio.com",
      projectId: "shopredux-c947a",
      storageBucket: "shopredux-c947a.appspot.com",
      messagingSenderId: "102374408174",
      appId: "1:102374408174:web:a14a8d9055b90317dc18ff",
      measurementId: "G-GFXZZQF26C"
  });

var base = Rebase.createClass(app.database());
export{ base , app };
