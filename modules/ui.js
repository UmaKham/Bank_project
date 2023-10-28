export function reload(arr, place) {
    place.innerHTML = "";

    let wallet_color = 1

    for (let item of arr) {
        let box = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')

        box.classList.add('box')

        if (wallet_color == 1) {
            box.classList.add('bg_one')
            wallet_color++
        } else if (wallet_color == 2) {
            box.classList.add('bg_two')
            wallet_color++
        } else if (wallet_color == 3) {
            box.classList.add('bg_three')
            wallet_color++
        } else {
            box.classList.add('bg_four')
            wallet_color = 1
        }

        h2.innerHTML = "Visa"
        p.innerHTML = "RUB"

        place.append(box)
        box.append(h2, p)
    }
}

export function table_reload(arr, place) {
    place.innerHTML = "";
    for (let item of arr) {
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        let card = document.createElement("td");
        let catelory = document.createElement("td");
        let sum = document.createElement("td");
        let time = document.createElement("td");

        id.innerHTML = item.id;
        card.innerHTML = item.card;
        catelory.innerHTML = item.catelories;
        sum.innerHTML = item.sum;
        time.innerHTML = item.time;

        tBody.append(tr);
        tr.append(id, card, catelory, sum, time);
    }
}

export function header_create(user) {
    let header = document.createElement("header");
    let nav = document.createElement("nav");
    let main_page = document.createElement("a");
    let my_wallets = document.createElement("a");
    let my_transactions = document.createElement("a");
    let div = document.createElement("div");
    let p = document.createElement("p");
    let button = document.createElement("button");
    let img = document.createElement("img");

    main_page.innerHTML = "Главная";
    my_wallets.innerHTML = "Мои кошельки";
    my_transactions.innerHTML = "Мои транзакции";
    img.src = "./imgs/log-out (1) 1.svg";
    p.classList.add("user_email");
    p.innerHTML = "alex@gmail.com"

    document.body.prepend(header);
    header.append(nav, div);
    nav.append(main_page, my_wallets, my_transactions);
    div.append(p, button);
    button.append(img);
}