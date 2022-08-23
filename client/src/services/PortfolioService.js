const baseURL = 'http://localhost:9000/api/portfolio'
const baseUrl = 'http://localhost:9000/api/'

export const getDailyBySymbol = (symbol) => {
    return fetch(baseUrl + `${symbol}Daily`)
        .then(res => res.json())
        .then(data => {
            const newArray = []
            for (const object of data) {
                const date = Date.parse(object.date)
                const convertedObject = {
                    x: date,
                    y: parseFloat(object.info['4. close']),
                    key: symbol
                }
                newArray.push(convertedObject)
            }
            return newArray
        }
    )};

export const getStocks = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getStocksByUserID = (id) => {
    return fetch(baseURL)
        .then(res => res.json())
        .then((data) => {
            const userPortfolio = []
            for (const object in data) {
                if (object.user._id === id) {
                    userPortfolio.push(object)
                }
            return userPortfolio
            }
        })
}

export const postPurchase = (payload) => {
    console.log(payload);
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}