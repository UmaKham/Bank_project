import { header_create } from "../../modules/ui";
import { reload } from "../../modules/ui";
import axios from 'axios'
import { getData } from '../../modules/helpers';

let user = JSON.parse(localStorage.getItem('user'))


header_create()

let wallets = document.querySelector('.wallets')
let p_user_email = document.querySelector('.p_user_email')
let btn_add_wallet = document.querySelector('.add_wallet')




getData('/wallets?user_id=' + user.id)
        .then(res => {
            reload(res.data, wallets)
        }
)

btn_add_wallet.onclick = () =>{
    location.assign('/pages/addWallet/')
}

        




p_user_email.innerHTML = user.email
