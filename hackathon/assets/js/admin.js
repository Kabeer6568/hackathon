
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore,getDoc, doc,addDoc, setDoc,collection } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 

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


const db = getFirestore(app);








// Adding class Details

let classTimings = document.getElementById("classTimings");
let scheduleClasses = document.getElementById("scheduleClasses");
let teacherName = document.getElementById("teacherName");
let sectionName = document.getElementById("sectionName");
let courseName = document.getElementById("courseName");
let batchNumber = document.getElementById("batchNumber");
let classDetailsBtn = document.getElementById("classDetails");









classDetailsBtn.addEventListener("click", async()=>{
        const docRef = await addDoc(collection(db, "classList"), {
            classTimings: classTimings.value,
        scheduleClasses: scheduleClasses.value,
        teacherName: teacherName.value,
        sectionName: sectionName.value,
        courseName: courseName.value,
        batchNumber: batchNumber.value
        });
        swal("Data Added",{
            icon: "sucess",
          });
        console.log("Document written with ID: ", docRef.id);
    })






let studentName = document.getElementById("studentName");
let studentfatherName = document.getElementById("fatherName");
let rollNumber = document.getElementById("rollNumber");
let contactNumber = document.getElementById("contactNumber");
let cnicNumber = document.getElementById("cnicNumber");
let imageUpload = document.getElementById("imageUpload");
let courseNameStudent = document.getElementById("courseNameStudent");
let assignClass = document.getElementById("courseNameStudent");
let studentDetailsBtn = document.getElementById("studentDetails");



studentDetailsBtn.addEventListener("click", async()=>{
    const docRef = await addDoc(collection(db, "studentList"), {
    studentName: studentName.value,
    studentfatherName: studentfatherName.value,
    rollNumber: rollNumber.value,
    contactNumber: contactNumber.value,
    cnicNumber: cnicNumber.value,
    courseNameStudent: courseNameStudent.value,
    assignClass: assignClass.value
    });

    
    swal("Data Added",{
        icon: "success",
      });
    console.log("Document written with ID: ", docRef.id);
})






