import Chart from 'chart.js/auto';
import {
    getData
} from '../../modules/helpers';
let wallet_id = location.search.split('=').at(-1)
let ctx = document.getElementById('chart')

let dates = []
let prices = []

getData('/transactions?wallet_id=' + wallet_id)
    .then((res) => {
        for (let item of res.data) {
            dates.push(item.date)
            prices.push(item.total)
        }
        setChart()
    })


function setChart() {
    const data = {
        labels: dates,
        datasets: [{
            label: 'My First Dataset',
            data: prices,
            borderWidth: 2
        }]
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    })
}