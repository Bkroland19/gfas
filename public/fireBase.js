var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyCoBk5j1d5ba1aN6ddbmrBf_esF4nYRcUk",
  authDomain: "wafula-allan-isaac.firebaseapp.com",
  projectId: "wafula-allan-isaac",
  storageBucket: "wafula-allan-isaac.appspot.com",
  messagingSenderId: "1029268610156",
  appId: "1:1029268610156:web:8343191507081d239e4c49",
  measurementId: "G-52BB2FF3T9"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


