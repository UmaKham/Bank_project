import { editData, getData, postData } from "../../modules/helpers";
import { user } from "../../modules/user";

let form = document.forms.add_trans;
let selectWallets = document.querySelector("#own_wallets");
let sum = form.querySelector("#sum");

getData("/wallets?user_id=" + user.id).then((res) => {
  for (let item of res.data) {
    let option = new Option(item.name);

    selectWallets.append(option);
  }
});

form.onsubmit = (e) => {
  e.preventDefault();
  let transaction = {
    user_id: user?.id,
    time:
      new Date().getDate() +
      "." +
      new Date().getMonth() +
      "." +
      new Date().getFullYear(),
  };

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    transaction[key] = value;
  });
  getData("/wallets?user_id=" + user.id).then((res) => {
    res.data.forEach((card) => {
      if (card.name === transaction.wallet) {
        if (card.balance - transaction.sum < 0) {
          alert("Not enough money for transaction");
        } else {
          let total = card.balance - transaction.sum;
          console.log(total);
          editData(`/wallets?id=${card.id}`, { balance: total })
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              console.log(card);
              postData("/transactions", transaction).then((res) => {
                if (res.status === 200 || res.status === 201) {
                  location.assign("/pages/my_transactions/");
                } else {
                  alert(`Smth went wrong. Please try again - ${user.name}`);
                }
              });
            }
          });
        }
      }
    });
  });
};
// res.data.forEach((card) => {
//   let options = selectWallets.querySelectorAll("option");
//   options.forEach((option) => {
//     if (card.name === option.innerHTML) {
//       if (card.balance - sum.value <= 0) {
//
//         // return
//       } else {
//         let total = card.balance - sum.value;
//         getData("/wallets?name=" + card.name).then(() => {
//           editData("/wallets", { balance: total }).then(() => {
//
//           });
//         });
//       }
//     }
//   });
// });
