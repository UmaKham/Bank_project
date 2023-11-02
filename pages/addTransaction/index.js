import { postData } from "../../modules/helpers";
import { user } from "../../modules/user";

let form = document.forms.add_trans;

form.onsubmit = (e) => {
  e.preventDefault();

  let transaction = {
    user_id: user?.id,
    time: new Date().getDay(),
  };

  let fm = new FormData(form);
  fm.forEach((key, value) => {
    transaction[key] = value;
  });

  postData("/transactions", transaction).then((res) => {
    if (res.status === 200 || res.status === 201) {
      location.assign("/pages/my_transactions/");
    } else {
      alert(`Smth went wrong. Please try again - ${user.name}`);
    }
  });
};
