import { header_create } from "../../modules/ui";

import { user } from "../../modules/user";

import { table_reload } from "../../modules/ui";

import { getData } from '../../modules/helpers';

import { getSymbols } from "../../modules/helpers";

header_create()

let box = document.querySelector('.box')
let back = document.querySelector('.back')
let h1 = document.querySelector('.back h1')
let h3 = document.querySelector('.back h3')
let select = document.querySelector('select')
let date_btns = document.querySelectorAll('.two_part_right button')
let date_btns_first = document.querySelector('.two_part_right button')


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


let wallet = JSON.parse(localStorage.getItem('wallet'))
console.log(wallet);



h1.innerHTML = wallet.name
h3.innerHTML = `${wallet.balance}${wallet.currency}`

getSymbols()
    .then(res => {
        for (let key in res) {
            let option = new Option(`${key} - ${res[key]}`, key)

            select.append(option)
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