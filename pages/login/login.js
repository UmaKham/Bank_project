import axios from "axios";

let form = document.forms.login;

let inpPassword = document.querySelector(".password");

form.onsubmit = (e) => {
  e.preventDefault();

  axios.get("http://localhost:8080/users?email=" + user.email).then((res) => {
    if (res.status == 200 || res.status == 201) {
      axios
        .get("http://localhost:8080/users?password=" + user.password)
        .then((res) => {
          if (res.data.password == inpPassword) {
            location.assign("/index.html/");
          } else {
            alert("False password");
          }
        });
    } else {
      alert("User doesn't find");
    }
  });
};
