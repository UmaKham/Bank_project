import axios from 'axios'
import { getData, postData } from '../../modules/helpers';

let form = document.forms.add_wallet

form.onsubmit = (e) => {
    e.preventDefault()

    let user_local = JSON.parse(localStorage.getItem('user'))
    let wallet = {
        user_id: user_local.id,
        currency: "RUB"
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        wallet[key] = value
    })

    postData('/wallets', wallet)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                console.log(res);
            }

    })


}






// getData('/users?email=' + user.email)
//         .then(res => {
//             if(res.status !== 200 && res.status !== 201) return
//             if(res.data.length > 0) {
//                 alert('account already taken!')
//                 return
//             }

//             postData('/users', user)
//                 .then(res => {
//                     if(res.status === 200 || res.status === 201)  {
//                         location.assign('/pages/login/')
//                     }

//                 })
//         })