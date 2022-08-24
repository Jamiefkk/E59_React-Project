const baseURL = 'http://localhost:9000/api/users/'
const baseUrl = 'http://localhost:9000/api/'

export const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getUsersPortfolio = (id) => {
    return fetch(baseURL + id)
        .then(res => res.json())
        .then(data => data.portfolio)
}

export const updateUser = (payload) => {
    return fetch(baseURL + payload._id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

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
