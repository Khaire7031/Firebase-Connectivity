/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDr3vJdyTJonkkIrmCMw5VB9SLGe3ryVTY",
    authDomain: "contact-2bf22.firebaseapp.com",
    databaseURL: "https://contact-2bf22-default-rtdb.firebaseio.com",
    projectId: "contact-2bf22",
    storageBucket: "contact-2bf22.appspot.com",
    messagingSenderId: "669539338301",
    appId: "1:669539338301:web:67d037699c8e0b1c9a8254",
    measurementId: "G-NKCY1FEG02"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script> */


//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";



 const firebaseConfig = {
   apiKey: "AIzaSyDr3vJdyTJonkkIrmCMw5VB9SLGe3ryVTY",
   authDomain: "contact-2bf22.firebaseapp.com",
   databaseURL: "https://contact-2bf22-default-rtdb.firebaseio.com",
   projectId: "contact-2bf22",
   storageBucket: "contact-2bf22.appspot.com",
   messagingSenderId: "669539338301",
   appId: "1:669539338301:web:67d037699c8e0b1c9a8254",
   measurementId: "G-NKCY1FEG02"
 };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }