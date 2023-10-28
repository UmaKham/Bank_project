import axios from 'axios'
let form = document.forms.add
let pass = document.querySelector('.password')
let error = document.querySelector('.error')

form.onsubmit = (e) => {
    e.preventDefault();

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
        console.log(user);
    })

    axios.get('http://localhost:8080/users?email=' + user.email)
        .then((res) => {
            if(res.status === 200 || res.status === 201) {
                axios.get('http://localhost:8080/users?password=' + user.password)
                    .then((res) => {
                        if(res.data.password === pass.value) {
                            location.assign('http://localhost:5173/')
                            error.classList.add('hide')
                        } 
                    })
                    }  
                })
            }

