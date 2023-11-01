import axios from 'axios'
import {
    getData
<<<<<<< HEAD
} from '../../modules/helpers';
=======
} from '../../modules/helpers'
>>>>>>> 9fa1f043871383a9ffa845a3aa41b2b004fd96da


let form = document.forms.login

form.onsubmit = (e) => {
    e.preventDefault();

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    getData('/users?email=' + user.email)
        .then(res => {
            if (!res) return
            if (res.status !== 200 && res.status !== 201) return
            if (res.data.length === 0) {
                alert('Not found')
                return
            }

            let [res_user] = res.data

            if (res_user.password === user.password) {

                delete res_user.password

                localStorage.setItem('user', JSON.stringify(res_user))
                location.assign('/')
            } else {
                alert('wrong password')
            }
        })
}
