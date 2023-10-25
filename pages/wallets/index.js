// let arr = [
//     {
//         id:1,
//         card: "visa", 
//         cash: "rub"
//     },
//     {
//         id:2,
//         card: "visa", 
//         cash: "rub"
//     },
//     {
//         id:3,
//         card: "visa", 
//         cash: "rub"
//     }
// ]

let wallets = document.querySelector('.wallets')

let wallet_color = 1

reload(arr, wallets)

function reload(arr, place) {
    place.innerHTML = "";

    for(let item of arr) {
        let box = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')

        box.classList.add('box')

        if(wallet_color == 1){
            box.classList.add('bg_one')
            wallet_color++
        } else if(wallet_color == 2){
            box.classList.add('bg_two')
            wallet_color++
        } else if(wallet_color == 3){
            box.classList.add('bg_three')
            wallet_color++
        } else{
            box.classList.add('bg_four')
            wallet_color = 1
        }

        h2.innerHTML = "Visa"
        p.innerHTML = "RUB"

        place.append(box)
        box.append(h2, p)
    }

}