import { getData } from "../../modules/helpers";
import { header_create, reload_wallet } from "../../modules/ui";

header_create();

let wallet = document.querySelector(".wallet");
let images = document.querySelectorAll(".circle");
let form = document.forms.convert;
let walletName = document.querySelector(".wallet_activity h4");

let choseImage = 0;
images.forEach((image, idx) => {
  image.onclick = () => {
    images[choseImage].classList.remove("chose");
    images[idx].classList.add("chose");

    choseImage = idx;
  };
});

let id = document.location.search.split("=").at(-1);
let walletInf = [];

getData("/wallets?id=" + id).then((res) => {
  if (res.status !== 200 && res.status !== 201) return;
  reload_wallet(res.data, wallet, true);
  for (let item of res.data) {
    walletName.innerHTML = `"${item.name}" - ${item.currency}`;
  }
  walletInf = res.data;
});

form.onsubmit = (e) => {
  e.preventDefault();

  let convertWallet = {};
  let fm = new FormData(form);
  fm.forEach((value, key) => {
    convertWallet[key] = value;
  });
  walletInf.forEach((walletInf) => (convertWallet.wallet = walletInf));
  console.log(convertWallet);
};