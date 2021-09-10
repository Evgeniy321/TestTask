let form = document.querySelector(".form")

let btn = form.querySelector(".input-button")
let name = form.querySelector(".name")
let phone = form.querySelector(".phone")
let email = form.querySelector(".email")

let ok = true
let RegExpName = new RegExp("[А-Яа-я - ]+$")
let RegPhone = new RegExp("\+[0-9\(\)- ]{11,}")
let RegExpEmail = new RegExp("\w+@[A-Za-z]+?\.[A-Za-z]{2,6}")

function error(field){
    field.setAttribute("class","Error")
}

form.addEventListener("submit",function(event){
    event.preventDefault()
    name.setAttribute("class","name")
    phone.setAttribute("class","phone")
    email.setAttribute("class","email")
    
    if(!name.value || !RegExpName.test(name.value)){
        error(name)
        ok = false
    }
    if(!phone.value || !RegExpPhone.test(phone.value)){
        error(phone)
        ok = false
    }
    if(!email.value || !RegExpEmail.test(email.value)){
        error(email)
        ok = false
    }

    if(ok){
        console.log("name: ", name.value)
        console.log("phone: ", phone.value)
        console.log("email: ", email.value)
    }
})
