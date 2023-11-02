import { header_create } from "../../modules/ui";

import { user } from "../../modules/user";

import { table_reload } from "../../modules/ui";

import { getData } from '../../modules/helpers';



header_create()


let p_email = document.querySelector('.p_email')
let tbody = document.querySelector('tbody')


p_email.innerHTML = user.email

getData('/transactions?user_id=' + user.id)
    .then(res => {
        console.log(res.data);
        table_reload(res.data, tbody)
    })



