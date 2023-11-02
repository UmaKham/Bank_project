import {
    getSymbols,
    postData
} from '../../modules/helpers';
import {
    user
} from '../../modules/user';
import { getData } from '../../modules/helpers';
import { editData } from '../../modules/helpers';

let form = document.forms.addTransacton
let select = document.querySelector('#wallets')
let inp_total = document.querySelector('#total')

let wallet = JSON.parse(localStorage.getItem('wallet'))


getData('/wallets?user_id=' + user.id)
    .then(res => {
        for (let key of res.data) {
            let option = new Option(key.name, key.name)

            select.append(option)
        }
        
       
    }
)





form.onsubmit = (e) => {
    e.preventDefault()




    let transaction = {
        user_id: user?.id,
        wallet_id: wallet.id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        transaction[key] = value
    })


    getData('/wallets?user_id=' + user.id + '&name=' + select.value )
        .then(res=> {
            let [wallet_info] = res.data
            if(inp_total.value>wallet_info.balance){
                alert('error')
                return
            }
                if(res.status ==200 || res.status ==201){
                    // editData( )

                    postData('/transactions', transaction)
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            location.assign('/pages/my_transactons/')
                            alert('good')
                        } else {
                            alert('Something went wrong please try again')
                        }
                    })
                }

    })
        



}