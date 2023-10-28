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
	})

	axios.get('http://localhost:8080/users?email=' + user.email)
		.then((res) => {
			if (res.status !== 200 && res.status !== 201) return
			if(res.data.length === 0) {
				alert('User not found')
				return
			}

			let [res_user] = res.data

			if(res_user.password === user.password) {
				alert('welcome')
				location.assign('/')
			} else {
				alert('wrong password')
			}
		})
}