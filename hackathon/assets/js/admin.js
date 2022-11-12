
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore,getDoc,getDocs, doc,addDoc, setDoc,collection } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 

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


let mainData = document.getElementById("mainData");
let data = document.getElementById("data")
let studentNameTable = document.getElementById("studentNameTable")

mainData.addEventListener("click", async()=>{

    mainData.classList.add('d-none');

    const querySnapshot = await getDocs(collection(db, "studentList"));
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let studentFNameData = doc.data().studentfatherName
            let studentNameData = doc.data().studentName
            let rollNumberData = doc.data().rollNumber
            let contactNumberData = doc.data().contactNumber
            let cnicNumberData = doc.data().cnicNumber
            let courseNameStudentData = doc.data().courseNameStudent
            let table = document.getElementById('table').innerHTML += `
<table class="table table-striped">

<tr>
    <td width="15%" id="studentNameTable">${studentNameData}</td>
    <td width="15%">${studentFNameData}</td>
    <td width="15%">${rollNumberData}</td>
    <td width="15%">${contactNumberData}</td>
    <td width="15%">${cnicNumberData}</td>
    <td width="15%">${courseNameStudentData}</td>
    
</tr>

</table>
`

})
});


// let table = document.getElementById('table').innerHTML = `
// <table class="table table-striped">
// <tr>
//     <th>Name</th>
//     <th>Father Name</th>
//     <th>Roll Number</th>
//     <th>Contact Number</th>
//     <th>CNIC Number</th>
//     <th>Course Name</th>
// </tr>
// <tr>
//     <td id="studentNameTable"></td>
//     <td>${}</td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
// </tr>
// <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
// </tr>
// <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
// </tr>
// </table>
// `

// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });


// const colRef = collection(db, "studentList");
//       getDocs(colRef).then(async(value)=>{
//         await value.docs.forEach((docsValue)=>{
//         await value.docs.forEach((docsValue)=>{
//             console.log(docsValue.data())
//             console.log(docsValue.data())
//             classData.innerHTML+= ""
//         })


// const colRef = collection(db, "classList"); const colRef = collection(db, "classList");
// let classData = document.getElementById('classData');
// let classData = document.getElementById('classData');
// console.log(classData)
// console.log(classData)
//   getDocs(colRef)
//   getDocs(colRef)
//   .then(async(value)=>{
//   .then(async(value)=>{
//       await value.docs.forEach((docsValue)=>{
//       await value.docs.forEach((docsValue)=>{
//           console.log(docsValue.data())
//           console.log(docsValue.data())
//           classData.innerHTML+=`<option>
//           classData.innerHTML+=`<option>
//              ${docsValue.data().batch}
//              ${docsValue.data().batch}
//             ${docsValue.data().timing}
//             ${docsValue.data().timing}
//              ${docsValue.data().section}
//              ${docsValue.data().section}

             
             
//              ${docsValue.data().current_teacher}
//             ${docsValue.data().current_teacher}
//             ${docsValue.data().schedule}
//             ${docsValue.data().schedule}




          
          
          
          
//           </option>`
//           </option>`
//       })
//       })
//   })
//   })

  
  
//   const colRef = collection(db, "classList");
// let classData = document.getElementById('classData');
// console.log(classData)
//   getDocs(colRef)
//   .then(async(value)=>{
//       await value.docs.forEach((docsValue)=>{
//           console.log(docsValue.data())
//           classData.innerHTML+=`<option>
//              ${docsValue.data().batch}
//             ${docsValue.data().timing}
//              ${docsValue.data().section}
//             ${docsValue.data().current_teacher}
//             ${docsValue.data().schedule}


          
          
//           </option>`
//       })
//   })


