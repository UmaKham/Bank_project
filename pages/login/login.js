import axios from "axios";
// let inp_email = document.querySelector(".email");
let inp_password = document.querySelector(".password");
let enter = document.querySelector(".enter");
let form = document.forms.login;

form.onsubmit = (e) => {
  e.preventDefault();

  axios.get("http://localhost:8080/users?email=" + user.email).then((res) => {
    if (res.status == 200 || res.status == 201) {
      axios
        .get("http://localhost:8080/users?password=" + user.password)
        .then((res) => {
          if (res.data.password == inp_password) {
            location.assign("/index.html/");
          } else {
            alert("Неверный пароль");
          }
        });
    } else {
      alert("Пользователь не найден");
    }
  });
};

enter.onclick = () => {
  location.assign("/pages/signup/");
};
