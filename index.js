// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: 'AIzaSyC5BGwUQRxZ9KFe9Xj7cODOy2AtSoH0Ugc',

  authDomain: 'csci225test.firebaseapp.com',

  projectId: 'csci225test',

  storageBucket: 'csci225test.appspot.com',

  messagingSenderId: '410490008897',

  appId: '1:410490008897:web:00ea7ad8d8b16c027d1dc0',

  measurementId: 'G-C28JY3F828',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content
  $(this).text('saved');
  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('fruits').add({
      item: value, //?
    });

  });
});
