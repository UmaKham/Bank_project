import axios from 'axios'
let form = document.forms

form.onsubmit = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8080/users?email=' + user.email)
        .then((res) => {
            if(res.status === 200 || res.status === 201) {
                axios.get('http://localhost:8080/users?password=' + user.password)
                    .then((res) => {
                        let pass = document.querySelector('.password')
                        let error = document.querySelector('.error')
                        res.data.password === pass.value ? location.assign('/http://localhost:5173/') : error.classList.remove('hide')
                    })
                    }  
                })
            }

