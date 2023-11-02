import {
    header_create
} from "./modules/ui.js";
import {
    user
} from './modules/user.js'
import {
    reload
} from "./modules/ui.js";
import {
    getData
} from './modules/helpers';

header_create()

let h1 = document.querySelector('h1')
let user_email_header = document.querySelector('.user_email')
let user_email_body = document.querySelector('section .user_email')
let all_wallets = document.querySelector('.all_wallets')
let wallets = document.querySelector('.wallets')

h1.innerHTML = `Добро пожаловать, ${user.name} ${user.surname}`
user_email_header.innerHTML = `${user.email}`
user_email_body.innerHTML = `${user.email}`


getData('/wallets?user_id=' + user.id)
    .then(res => {
        reload(res.data, wallets)
        
    })


all_wallets.onclick = () => {
    location.assign('/pages/my_wallets/')
}