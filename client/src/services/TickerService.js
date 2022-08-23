const baseUrl = 'http://localhost:9000/api/'

export const getDailyTickerDataBySymbol = (symbol) => {
    return fetch(baseUrl + `${symbol}Daily`)
        .then(res => res.json())
        .then(data => {
            const newArray = []
            
            for (const object of data) {
                if (newArray.length === 2) {
                    break
                }
                const stockDate = Date.parse(object.date)
                const convertedObject = {
                    date: stockDate,
                    value: parseFloat(object.info['4. close'])
                }
                newArray.push(convertedObject)
            
        }
            return newArray
        }
    )};