let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirm_password")
let button = document.querySelector("#button")
let error = document.querySelector("#error")

button.addEventListener("create account", (e) => {
    if (password.value != confirmPassword.value) {
        messages.push("*passwords do not match")
    }

})

