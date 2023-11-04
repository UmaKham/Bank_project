import { header_create } from "../../modules/ui";
import { convertCurrency, editData, getData, getSymbols } from "../../modules/helpers";

let wallet_id = location.search.split('=').at(-1)
let from  
let amount

getData('/wallets/' + wallet_id)    
    .then(({data}) => {
        h3.innerHTML = data?.balance.toLocaleString('us-US') + " " + data.currency
        from = data.currency
        amount = data.balance
    })



header_create()

let box = document.querySelector('.box')
let back = document.querySelector('.back')
let h1 = document.querySelector('.back h1')
let h3 = document.querySelector('.back h3')
let date_btns = document.querySelectorAll('.two_part_right button')
let date_btns_first = document.querySelector('.two_part_right button')
let currency_select = document.querySelector('#currency')
let convert_btn = document.querySelector('#convert_btn')


convert_btn.onclick = () => {
    let to = currency_select.value
    console.log('click');
    convertCurrency(from, to, amount)
        .then((res) => {
            if(res.status === 200 || res.status == 201) {
                editData('/wallets/' + wallet_id, {balance: res.data.result, currency: to})
                .then(edit_res => {
                        if(edit_res.status === 200 || edit_res.status == 201) {
                            h3.innerHTML = res?.data?.result.toLocaleString('uz-UZ') + " " + res?.data?.query?.to
                            return
                        } 
                        alert('Something went wrong please try again')
                    })
            }
        })
}

box.onclick = () => {
    box.classList.remove('open')
    back.classList.remove('close')

    box.classList.add('close')
    back.classList.add('open')
}

back.onclick = () => {
    box.classList.remove('close')
    back.classList.remove('open')

    box.classList.add('open')
    back.classList.add('close')
}


// let wallet = JSON.parse(localStorage.getItem('wallet'))
// console.log(wallet);



// h1.innerHTML = wallet.name
// h3.innerHTML = `${wallet.balance}${wallet.currency}`

getSymbols()
    .then(res => {
        for (let key in res) {
            let option = new Option(`${key} - ${res[key]}`, key)

            currency_select.append(option)
        }
    })


date_btns.forEach((btn)=> {
    btn.onclick = () => {
        date_btns.forEach(btn=>{
            if(btn.classList.contains('selected_btn')){
                btn.classList.remove('selected_btn')
            }
        })
        btn.classList.add('selected_btn')
    }
})

date_btns_first.classList.add('selected_btn')