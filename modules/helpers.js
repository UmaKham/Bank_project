import axios from "axios"
const base_url = import.meta.env.VITE_BASE_URL


export const getData = async (resource) => {
    try {
        const res = await axios.get(base_url + resource)
    
        return res
    } catch(e) {
        console.log(e);
        return null
    }
}

export const postData = async (resource, body) => {
    try {
        const res = await axios.post(base_url + resource, body)

        return res
    } catch(e) {
        console.log(e);
        return null
    }
    
}
export const editData = async (resource, body) => {
    try {
        const res = await axios.patch(base_url + resource, body)

        return res
    } catch(e) {
        console.log(e);
        return null
    }
    
}


export const getSymbols = async () => {
    const res = JSON.parse(localStorage.getItem('symbols'))

    if(res) {
        return res
    } 

    try {
        const res = await axios.get('https://api.apilayer.com/fixer/symbols', {
            headers: {
                apikey: import.meta.env.VITE_API_KEY
            }
        })

        localStorage.setItem('symbols', JSON.stringify(res.data.symbols))
        return res.data.symbols
    } catch (e) {
        console.log(e);
    }
}
export const convertCurrency = async (from, to, amount) => {
    try {
        const res = await axios.get(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, {
            headers: {
                apikey: import.meta.env.VITE_API_KEY
            }
        })
        
        return res
    } catch (e) {
        console.log(e);
    }
}