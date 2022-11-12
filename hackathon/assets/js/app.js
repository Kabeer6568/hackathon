// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC7690KVg5y266cGNU0mdJCS_WAOFQ7KFY",
    authDomain: "attendance-portal-400ae.firebaseapp.com",
    projectId: "attendance-portal-400ae",
    storageBucket: "attendance-portal-400ae.appspot.com",
    messagingSenderId: "778596480272",
    appId: "1:778596480272:web:e5a2f1801e98ee875a2195",
    measurementId: "G-L1Z6GKQ884"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize auth
const auth = getAuth();

let signinBtn = document.getElementById("signin");


signinBtn.addEventListener('click', ()=>{
    let SigninEmail = document.getElementById("inputEmail3");
    let SigninPass = document.getElementById("inputPassword3");
    console.log(SigninPass.value);
    signInWithEmailAndPassword(auth,SigninEmail.value, SigninPass.value )
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user", user);
        
        window.location.href = "admin.html"
        // const docRef = doc(db, "users", user.uid);
        // const docSnap = await getDoc(docRef);
  
        // if (docSnap.exists()) {
  
        //   getUserFromDataBase(user.uid);
        //   window.location.href = "admin.html"
  
  
        // } else {
        //   // doc.data() will be undefined in this case
        //   console.log("No such document!");
        // }
      })
      .catch((error) => {
        swal("Email Or Password is Incorrect",{
            icon: "error",
          });
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ErrorMsg =>", errorMessage);
      });
})
   
  
  


//   signinBtn.addEventListener('click', signIn)