import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.0/+esm'
let form = document.forms.signup

form.onsubmit = (e) => {
    e.preventDefault();
    
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })


    axios.get('http://localhost:8080/users?email=' + user.email)
        .then(res => {
            if(res.status !== 200 && res.status !== 201) return 
            if(res.data.length > 0) {
                alert('account already taken!')
                return
            } 

            axios.post('http://localhost:8080/users', user)
                .then(res => {
                    if(res.status === 200 || res.status === 201)  {
                        location.assign('/pages/login/')
                    }

                })
        })


}