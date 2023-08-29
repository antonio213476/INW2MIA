// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtW_SuiH2E0es4dRuKJsbKk130a5jYoSE",
  authDomain: "projeto2-2f72b.firebaseapp.com",
  projectId: "projeto2-2f72b",
  storageBucket: "projeto2-2f72b.appspot.com",
  messagingSenderId: "1096001431760",
  appId: "1:1096001431760:web:eac16257f2fc5024f6d6d5"
};


firebase.initializeApp(firebaseConfig)

const emailField = document.getElementById('email')
const passwordField = document.getElementById('password')
const loginButton = document.getElementById('loginButton')

loginButton.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;

    firebaseauth().signInWithEmailAndPassword(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            
        })
})