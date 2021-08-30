
const password = () => {
    const userID = "user-example";
    const userPassword = "password-example";
    const getInputID = document.getElementById("inputUserID").value;
    const getInputPassword = document.getElementById("inputPassword").value;

    const getWrongPassword = document.querySelector(".wrongPassword");
    const getPasswordBox = document.querySelector(".passwordBox")

    if (getInputID == userID && getInputPassword == userPassword) {
        window.location.href = "bienvenido.html"
    } else {
        getWrongPassword.style.visibility = "visible";
        getPasswordBox.style.boxShadow = "0px 0px 0px 1px red";
    }
}

function changeEye() {
    const getVisibilityOff = document.getElementById("visibilityOff")
    const getVisibilityOn = document.getElementById("visibilityOn")
    const getInputPasswordType = document.getElementById("inputPassword")

    if (getInputPasswordType.type === "password") {
        getVisibilityOff.style.visibility = "hidden";
        getVisibilityOn.style.visibility = "visible";
        getInputPasswordType.type = "text";

    } else {
        getVisibilityOff.style.visibility = "visible";
        getVisibilityOn.style.visibility = "hidden";
        getInputPasswordType.type = "password";
    }
}

function forgotPassword () {
    const getSadEmoji = document.getElementById("sadEmoji")

    getSadEmoji.style.opacity="1";
}

