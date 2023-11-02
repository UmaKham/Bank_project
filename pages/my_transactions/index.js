import { header_create } from "../../modules/ui";

import { user } from "../../modules/user";

import { table_reload } from "../../modules/ui";

import { getData } from '../../modules/helpers';

header_create()

let main_box = document.querySelector('.main_box')
let p_email = document.querySelector('.p_email')


add_transaction_btn.onclick = () => {
    location.assign("/pages/addWallet/")
}

p_email.innerHTML = user.email


// table_reload(user, main_box)


// getData('/wallets?user_id=' + user.id)
//         .then(res => {
//             reload(res.data, wallets)
//         }
// )

// btn_add_wallet.onclick = () =>{
//     location.assign('/pages/addWallet/')
// }