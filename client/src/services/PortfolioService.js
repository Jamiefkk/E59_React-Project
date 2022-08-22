const baseURL = 'http://localhost:9000/api/portfolio'

export const getStocks = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postPurchase = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}