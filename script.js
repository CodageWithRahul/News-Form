let subcribe_btn = document.querySelector(".subscribe-btn")
let email = document.querySelector("#email")
let signup = document.querySelector(".sign-up-form")
let label = document.querySelector("label")
let email_box = document.querySelector(".email")
let thank = document.querySelector(".thank-you")
let dis = document.querySelector(".dismiss")
let mail = document.querySelector(".mail")
let warn = document.querySelector(".waring")
let email2 = document.querySelector(".email2")


subcribe_btn.addEventListener("click", sub)

email.addEventListener("click", background)


const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function sub() {

    if (email.value.match(check)) {
        thank.classList.remove("hide")
        signup.classList.add("hide")
        mail.innerHTML = email.value


    }
    else if (email.value == "") {

        warn.classList.remove("hide")
        email.placeholder = "Enter Your  Email ID"
        email.classList.add("add-warn")
    }
    else if (email.value.length < 2) {
        // background()

    }
    else if (!email.value.match(check)) {

        email.classList.add("add-warn")
        warn.classList.remove("hide")
    }



}
function background() {
    email.placeholder = "email@company.com"
    email.value = ""
    label.innerHTML = "Email address"
    label.style.backgroundColor = "white"
    email.style.backgroundColor = "white"
    warn.classList.add("hide")
    email.classList.remove("add-warn")

}

dis.addEventListener("click", dismiss)

function dismiss() {
    email.value = ""
    signup.classList.remove("hide")
    thank.classList.add("hide")
}