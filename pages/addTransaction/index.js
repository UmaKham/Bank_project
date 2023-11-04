import {user} from '../../modules/user';
import { getData, editData, postData } from '../../modules/helpers';

let form = document.forms.addTransacton
let select = document.querySelector('#wallets')
let wallets = []


getData('/wallets?user_id=' + user.id)
    .then(res => {
        for (let key of res.data) {
            let option = new Option(key.name, key.id)

            select.append(option)
        }
        wallets = res.data
    }
)

form.onsubmit = (e) => {
    e.preventDefault()

    let transaction = {
        user_id: user?.id,
        date: new Date().getFullYear() + "-" +new Date().getMonth() + "-" + new Date().getDate() + "-" + new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        transaction[key] = value
    })


    let selected_card = wallets.find(wl => wl.id === +transaction.wallet_id)

    if(+transaction.total > +selected_card.balance || +transaction.total < 0) {
        alert('неверный ввод')
        return
    }

    delete selected_card.currency
    delete selected_card.user_id
    delete selected_card.id

    transaction.card = selected_card

    let sum = transaction.card.balance - transaction.total

    editData('/wallets/' + transaction.wallet_id, {balance: sum})
        .then(res => {
            if(res.status !== 200 && res.status !== 201) return 

            postData('/transactions', transaction)
                .then(res => {
                    if(res.status !== 200 && res.status !== 201) return 

                    alert('success!')
                    setTimeout(() => {
                        location.assign('/pages/my_transactions/')
                    }, 1000)
                })
        })
}
