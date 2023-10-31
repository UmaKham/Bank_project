import { header_create } from "../../modules/ui";

header_create()

let wallets = document.querySelector('.wallets')
let p_user_email = document.querySelector('.p_user_email')
// let body_user_email = document.querySelector('.body_user_email')


import { reload } from "../../modules/ui";
import axios from 'axios'
import { getData } from '../../modules/helpers';



getData('/wallets')
        .then(res => {
            reload(res.data, wallets)
        }
        )

        
// getData('/users?email=' + )
//     .then(res => {
//     console.log(res.data);
// }
// )
let user = JSON.parse(localStorage.getItem('user'))
p_user_email.innerHTML = user.email
console.log();

// axios.get("http://localhost:8080/users")
//     .then(res => {
//         if(res.status == 200 ||res.status ==200){
//             console.log(res);
//         }
//     })