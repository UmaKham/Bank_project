import { header_create } from "../../modules/ui";
import { reload } from "../../modules/ui";
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

<<<<<<< HEAD
        

wallets.addEventListener('dblclick', () => {
    location.assign('/pages/wallet/?data=' + JSON.stringify(user));
   
    let url = {getData}
    let id = location.search.split('=').at(-1)


    fetch(url + '/' + id)
        .then(res => res.json())
        .then(res => {
            wallets.innerHTML = res.email
        })


});



=======
>>>>>>> 6fcf2e1d090d003626aaeb4b25b2d6d687029c31
p_user_email.innerHTML = user.email


