import { getData, convert, editData } from "../../modules/helpers";
import { header_create, reload_wallet } from "../../modules/ui";

header_create();

let walletBlock = document.querySelector(".wallet");
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
  reload_wallet(res.data, walletBlock, true);
  for (let item of res.data) {
    walletName.innerHTML = `"${item.name}" - ${item.currency}`;
  }
  walletInf = res.data;
});

form.onsubmit = (e) => {
  e.preventDefault();

  let convertWallet = {};
  let wallet;
  let fm = new FormData(form);
  fm.forEach((value, key) => {
    convertWallet[key] = value;
  });
  walletInf.forEach((walletInf) => {
    convertWallet.wallet = walletInf;
    wallet = walletInf;
  });
  if (+convertWallet.newSum > +wallet.balance || +convertWallet.newSum < 0) {
    alert("not enought money");
    return;
  }
  console.log(convertWallet);

  let total = convertWallet.wallet.balance - convertWallet.newSum;

  convert(
    convertWallet.wallet.currency,
    convertWallet.newCurrency,
    convertWallet.newSum
  );

  let success = JSON.parse(localStorage.getItem("success"));

  if (!success.success) return;

  convertWallet.newSum = success.result;
  if (!Boolean((convertWallet.newSum = success.result))) return;
  
  delete convertWallet.wallet;
  editData("/wallets/" + id, {
    balance: total,
    convertWallet,
  }).then((res) => {
    if (res.status !== 200 && res.status !== 201) return;
    console.log(res.data);

    getData("/wallets?id=" + id).then((res) => {
      reload_wallet(res.data, walletBlock, true);
      form.reset();
      alert("success");
    });
  });
};
