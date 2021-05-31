import * as firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyDkY_TPduE69_1XiO1Qtd-arCCiJjoOCco",
  authDomain: "numbas-d6211.firebaseapp.com",
  projectId: "numbas-d6211",
  storageBucket: "numbas-d6211.appspot.com",
  messagingSenderId: "249560181763",
  appId: "1:249560181763:web:429ce34c94efa86177f236",
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
