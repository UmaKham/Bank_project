import { getData } from "/modules/helpers";
import { header_create } from "/modules/ui"; 
import { user } from "/modules/user";
console.log(user);

header_create(user)
reload_card(user)

function reload_card(user) {
  let container = document.querySelector('main .container')
  container.innerHTML = ""
  //Card-box
  let card_box = document.createElement('div')
  let card_item = document.createElement('div')
  let top_card = document.createElement('div')
  let img_icon = document.createElement('div')
  let img_wallet = document.createElement('img')
  let card_name = document.createElement('span')
  let cash = document.createElement('span')
  let currency = document.createElement('span')

  let converter = document.createElement('div')
  let actual_currency = document.createElement('h2')
  let select = document.createElement('select')
  let convert_btn = document.createElement('button')

  let chart_box = document.createElement('div')
  let nav_chart = document.createElement('div')
  let chart_title = document.createElement('span')
  let chart_btnbox = document.createElement('div')
  let btn_today = document.createElement('button')
  let btn_week = document.createElement('button')
  let btn_month = document.createElement('button')
  let btn_year = document.createElement('button')
  let chart = document.createElement('div')

  container.append(card_box, chart_box)
  card_box.append(card_item, converter)
  card_item.append(top_card, cash, currency)
  converter.append(actual_currency, select, convert_btn)
  top_card.append(img_icon, card_name)
  img_icon.append(img_wallet)

  chart_box.append(nav_chart, chart)
  nav_chart.append(chart_title, chart_btnbox)
  chart_btnbox.append(btn_today, btn_week, btn_month, btn_year)

  card_box.classList.add('card_box')
  card_item.classList.add('card_item')
  top_card.classList.add('top_card')
  img_icon.classList.add('img_icon')
  card_name.classList.add('card_name')
  cash.classList.add('cash')
  currency.classList.add('currency')
  
  converter.classList.add('converter')
  actual_currency.classList.add('actual_currency')
  
  chart_box.classList.add('chart_box')
  nav_chart.classList.add('nav_chart')
  chart_btnbox.classList.add('chart_btnbox')
  btn_today.classList.add('active')
  chart.classList.add('chart')

  card_item.style='background: url(/public/img/card_bg.jpg); background-repeat: no-repeat; background-size: cover;'
  img_wallet.src='../../public/img/wallet.png'
  img_wallet.width='30'
  converter.style='background: url(/public/img/card_bg2.jpg); background-repeat: no-repeat; background-size: cover;'

  card_name.innerHTML = `${user.name} ${user.surname}`
  cash.innerHTML = '10000'
  currency.innerHTML = 'RUB'

  actual_currency.innerHTML = 'RUB'
  convert_btn.innerHTML = 'Convert'

  chart_title.innerHTML = 'Uma Kham unit chart'
  btn_today.innerHTML = 'Today'
  btn_week.innerHTML = 'Week'
  btn_month.innerHTML = 'Month'
  btn_year.innerHTML = 'Year'

}

reload_card(user)