const baseUrl = 'http://localhost:9000/api/'

export const getDailyBySymbol = (stockSymbol) => {
    return fetch(baseUrl + `${stockSymbol}Daily`)
        .then(res => res.json())
        .then(data => {
            const newArray = []
            for (const object of data) {
                const date = Date.parse(object.date)
                const convertedObject = {
                    x: date,
                    y: parseFloat(object.info['4. close']),
                    symbol: stockSymbol
                }
                newArray.push(convertedObject)
            }
            const reversedArray = newArray.reverse()
            return reversedArray
        }
    )};



