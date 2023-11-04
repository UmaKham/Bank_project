import { header_create, table_reload } from "./modules/ui.js";
import { user } from "./modules/user.js";
import { reload } from "./modules/ui.js";
import { getData } from "./modules/helpers";

import { table_reload } from "./modules/ui.js";

header_create();

let h1 = document.querySelector("h1");
let user_email_header = document.querySelector(".user_email");
let user_email_body = document.querySelector("section .user_email");
let all_wallets = document.querySelector(".all_wallets");
let wallets = document.querySelector(".wallets");
let tbody = document.querySelector("tbody");

h1.innerHTML = `Добро пожаловать, ${user.name} ${user.surname}`;
user_email_header.innerHTML = `${user.email}`;
user_email_body.innerHTML = `${user.email}`;

getData("/wallets?user_id=" + user.id).then((res) => {
  reload(res.data, wallets);
});

let transactions = document.querySelector("tbody");

all_wallets.onclick = () => {
  location.assign("/pages/my_wallets/");
};

getData("/transactions?user_id=" + user.id).then((res) => {
  console.log(res.data);
  table_reload(res.data, tbody);
});
