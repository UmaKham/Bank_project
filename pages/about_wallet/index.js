import { getData } from "../../modules/helpers";
import { header_create, reload_wallet } from "../../modules/ui";

header_create();

let wallet = document.querySelector(".wallet");
let walletActivity = document.querySelector(".wallet_activity");
let images = document.querySelectorAll(".circle");

let id = document.location.search.split("=").at(-1);

getData("/wallets?id=" + id).then((res) => {
  console.log(res.data);
  reload_wallet(res.data, wallet);
});

let choseImage = 0;
images.forEach((image, idx) => {
  image.onclick = () => {
    images[choseImage].classList.remove("chose");
    images[idx].classList.add("chose");

    choseImage = idx;
  };
});
