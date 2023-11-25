

//const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
//const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
//import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getFirestore,doc, getDoc,collection,getDocs,query} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";


// Initialize Firebase
/*var config = {
    apiKey: "AIzaSyBnSrCl0UvzIq1yrDMJ3zsHyLKkuQ_nPvA",
    authDomain: "asdfadsf-a56e7.firebaseapp.com",
    databaseURL: "https://asdfadsf-a56e7.firebaseio.com",
    projectId: "asdfadsf-a56e7",
    storageBucket: "asdfadsf-a56e7.appspot.com",
    messagingSenderId: "104313484945"
};

firebase.initializeApp(config);*/

const firebaseConfig = {
    apiKey: "AIzaSyBHMz-HEdFk4Co9M1XkIx_CcLNAvDXuIB4",
    authDomain: "ytfmov.firebaseapp.com",
    projectId: "ytfmov",
    storageBucket: "ytfmov.appspot.com",
    messagingSenderId: "781323708342",
    appId: "1:781323708342:web:f7494342adb8ed540bc317",
    measurementId: "G-5CCKPR01G5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  //const database = getDatabase();
  const db = getFirestore(app);


  const docRef = doc(db, "ytfmov", "tt0118680");
  const docAllRef = collection(db, "ytfmov");
  const docSnap = await getDoc(docRef);
  //const docAll = await db.collection('ytfmov').get();
  const q = query(collection(db, "cities"));
  const docAll = await getDocs(docAllRef);
  //const docAll = await getDocs(q);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());

    console.log("all:",docAll.docs.map(d=>d.data()));
    docAll.docs.forEach(d=>document.body.insertAdjacentHTML('beforeend',getDiv(d.data())));

  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  function getDiv(mov){
   return  "<div class=\"parent\"> <div class=\"img\"><a href=\"https://www.youtube.com/watch?v="+mov.yt+"&t="+mov.tplus+"\"><img src="+mov.poster_path+" /></a></div><div class=\"text\">"+
    mov.original_title +"</div><a href=\"https://www.youtube.com/watch?v="+mov.yt+"&t="+mov.tplus+"+Youtube</a></div>";
  }