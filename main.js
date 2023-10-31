import { header_create } from "./modules/ui";
import { reload_card } from '/modules/ui'
import { getData, postData} from './modules/helpers'

header_create()

let name = document.querySelector('.container h1')

getData('/users/name') 

/* name.innerHTML = `Добро пожаловать, ${}!` */

let h1 = document.querySelector('h1')
let user_email = document.querySelector('.user_email')
let all_wallets = document.querySelector('.all_wallets')
//h1.innerHTML = `Добро пожаловать, ${}`
//user_email.innerHTML = `${}`

let card_add = document.querySelector('.box_add')
let addCard_btn = document.querySelector('.addCard_btn')

card_add.onclick = () => {
  let form = document.forms.add_card
  let form_add_card = document.querySelector('.form_bg')

  form_add_card.classList.remove('hide')

  
  form.onsubmit = (e) => {
    e.preventDefault()

    let wallet = {}
  
    let fm = new FormData(form)
  
    fm.forEach((value, key) => {
      wallet[key] = value
    })

    reload_card(wallet)
  }

}