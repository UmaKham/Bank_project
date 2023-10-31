import { header_create } from "./modules/ui.js";

header_create()


let h1 = document.querySelector('h1')
let user_email_header = document.querySelector('.user_email')
let user_email_body = document.querySelector('section .user_email')
let all_wallets = document.querySelector('.all_wallets')
let user = JSON.parse(localStorage.getItem("user"))
console.log(user);

h1.innerHTML = `Добро пожаловать, ${user.name}`
user_email_header.innerHTML = `${user.email}`
user_email_body.innerHTML = `${user.email}`

