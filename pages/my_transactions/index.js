import { header_create } from "../../modules/ui";
import { reload } from "../../modules/ui";
import { getData } from "../../modules/helpers";
import { user } from "../../modules/user";

header_create();

let tbody = document.querySelector("table tbody");
let p_user_email = document.querySelector(".p_user_email");
let add_transaction = document.querySelector(".all_transaction");

getData("/transactions?user_id=" + user.id).then((res) => {
  reload(res.data, tbody);
});

p_user_email.innerHTML = user.email;

add_transaction.onclick = () => {
  location.assign("/pages/addTransaction/");
};
