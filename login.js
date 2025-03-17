// אתחול Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB8LTCh_O_C0mFYINpbdEqgiW_3Z51L1ag",
    authDomain: "final-project-d6ce7.firebaseapp.com",
    projectId: "final-project-d6ce7",
    storageBucket: "final-project-d6ce7.appspot.com",
    messagingSenderId: "1056060530572",
    appId: "1:1056060530572:web:d08d859ca2d25c46d340a9",
    measurementId: "G-LD61QH3VVP"
};

// בדיקה אם Firebase כבר מאותחל
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

// הפניה לשירותים של Firebase
const auth = firebase.auth();

// הצגת דף התחברות כברירת מחדל
document.addEventListener("DOMContentLoaded", () => {
    showLogin();
});

function showLogin() {
    document.getElementById("login-container").classList.add("active");
    document.getElementById("register-container").classList.remove("active");
    document.getElementById("forgot-password-container").classList.remove("active");
}

function showRegister() {
    document.getElementById("login-container").classList.remove("active");
    document.getElementById("register-container").classList.add("active");
    document.getElementById("forgot-password-container").classList.remove("active");
}

function showForgotPassword() {
    document.getElementById("login-container").classList.remove("active");
    document.getElementById("register-container").classList.remove("active");
    document.getElementById("forgot-password-container").classList.add("active");
}

// פונקציה להתחברות
function login(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("✅ התחברת בהצלחה!");
        })
        .catch(error => alert("❌ שגיאה: " + error.message));
}

// פונקציה להרשמה
function register(event) {
    event.preventDefault();
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("✅ נרשמת בהצלחה!");
            showLogin();
        })
        .catch(error => alert("❌ שגיאה בהרשמה: " + error.message));
}

// פונקציה לאיפוס סיסמה
function resetPassword(event) {
    event.preventDefault();
    let email = document.getElementById("reset-email").value;

    auth.sendPasswordResetEmail(email)
        .then(() => {
            alert("✅ נשלח קישור לאיפוס הסיסמה!");
            showLogin();
        })
        .catch(error => alert("❌ שגיאה: " + error.message));
}
