let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirm_password")
let error = document.querySelector("#error")

if (password != confirmPassword) {
    error.innerHTML = "*passwords do not match"  
}else{
    error.innerHTML = ""
}