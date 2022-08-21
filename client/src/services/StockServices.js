const baseUrl = 'http://localhost:9000/api/'

export const getDailyBySymbol = (symbol) => {
    return fetch(baseUrl + `${symbol}Daily`)
        .then(res => res.json())
        .then(data => {
            const newArray = []
            for (const object of data) {
                const convertedObject = {x: Date.parse(object.date), y: object.info['4. close']}
                newArray.push(convertedObject)
            }
            return newArray
        }
    )};



