let user = localStorage.getItem('user')

if(typeof(user) === 'undefined') {
    localStorage.removeItem('user')
}

user = user ? JSON.parse(user) : null

export {user}