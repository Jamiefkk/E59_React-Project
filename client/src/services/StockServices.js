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
                    y: parseFloat(object.info['4. close'])
                }
                newArray.push(convertedObject)
            }
            const reversedArray = newArray.reverse()
            return reversedArray
        }
    )};



