export function reload_wallet(arr, place, plite) {
  place.innerHTML = "";
  for (let item of arr) {
    if (plite) {
      place.innerHTML += `
        <h2 class="walletName">${item.name}</h2>
        <div>
         <p class="balance">Balance: ${item.balance} <b>${item.currency}</b> </p>
        <p class="currency">Currency: <b>${item.currency}</b></p>
        </div>
        `;
    }
  }
}

export function reload(arr, place) {
  place.innerHTML = "";

  let wallet_color = 1;

  if (arr.length == 0) {
    let p = document.createElement("p");
    p.innerHTML = "NO WALLETS";
    p.style.color = "red";
    place.append(p);
  }

  for (let item of arr) {
    let box = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    box.classList.add("box");

    if (wallet_color == 1) {
      box.classList.add("bg_one");
      wallet_color++;
    } else if (wallet_color == 2) {
      box.classList.add("bg_two");
      wallet_color++;
    } else if (wallet_color == 3) {
      box.classList.add("bg_three");
      wallet_color++;
    } else {
      box.classList.add("bg_four");
      wallet_color = 1;
    }

    h2.innerHTML = item.name.toUpperCase();
    p.innerHTML = item.currency.toUpperCase();

    place.append(box);
    box.append(h2, p);

    box.ondblclick = () => {
      location.assign(`/pages/about_wallet/index.html?id=${item.id}`);
    };
  }
}

export function table_reload(arr, place) {
  place.innerHTML = "";
  for (let item of arr) {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let card = document.createElement("td");
    let category = document.createElement("td");
    let sum = document.createElement("td");
    let time = document.createElement("td");

    id.innerHTML = item.id;
    card.innerHTML = item.card.name;
    category.innerHTML = item.cattegory;
    sum.innerHTML = item.total;
    time.innerHTML = item.date;

    place.append(tr);
    tr.append(id, card, category, sum, time);
  }
}

export function header_create() {
  let locale = location.pathname.split("/")[2] || "home";

  let header = document.createElement("header");
  let container = document.createElement("div");
  let nav = document.createElement("nav");
  let main_page = document.createElement("a");
  let my_wallets = document.createElement("a");
  let my_transactions = document.createElement("a");
  let div = document.createElement("div");
  let p = document.createElement("p");
  let button = document.createElement("button");
  let img = document.createElement("img");

  container.classList.add("container");
  main_page.innerHTML = "Главная";
  main_page.href = "/";
  my_wallets.innerHTML = "Мои кошельки";
  my_wallets.href = "/pages/my_wallets/";
  my_transactions.innerHTML = "Мои транзакции";
  my_transactions.href = "/pages/my_transactions/";
  img.src = "../../public/img/log-out (1) 1.png";
  let user_local = JSON.parse(localStorage.getItem("user"));
  p.classList.add("user_email");
  p.innerHTML = user_local.email;

  document.body.prepend(header);
  header.append(container);
  container.append(nav, div);
  nav.append(main_page, my_wallets, my_transactions);
  div.append(p, button);
  button.append(img);

  switch (locale) {
    case "home":
      main_page.classList.add("active_url");
      break;
    case "my_wallets":
      my_wallets.classList.add("active_url");
      break;
    case "my_transactions":
      my_transactions.classList.add("active_url");
      break;

    default:
      break;
  }

  img.onclick = () => {
    let ask = confirm("Вы действительно хотите выйти?");

    if (ask) {
      localStorage.clear();
      location.assign("/pages/login/");
    }
  };
}
