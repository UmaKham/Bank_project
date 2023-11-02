import {
    getSymbols,
    postData
} from '../../modules/helpers';
import {
    user
} from '../../modules/user';

let form = document.forms.add_wallet
let select = document.querySelector('#currency')

getSymbols()
    .then(res => {
        for (let key in res) {
            let option = new Option(`${key} - ${res[key]}`, key)

            select.append(option)
        }
    })

form.onsubmit = (e) => {
    e.preventDefault()

    let wallet = {
        user_id: user?.id,
        currency: "RUB"
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        wallet[key] = value
    })

    console.log(wallet);

    postData('/wallets', wallet)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                location.assign('/pages/my_wallets/')
            } else {
                alert('Something went wrong please try again')
            }
        })
}