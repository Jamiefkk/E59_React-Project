const baseUrl = 'http://localhost:9000/api/'

export const getDailyTickerDataBySymbol = (symbol) => {
    return fetch(baseUrl + `${symbol}Daily`)
        .then(res => res.json())
        .then(data => {
            const stocksArray = []
            for (const object of data) {
                if (stocksArray.length === 2) {
                    break
                }
                const stockDate = Date.parse(object.date)
                const convertedObject = {
                    date: stockDate,
                    value: parseFloat(object.info['4. close'])
                }
                stocksArray.push(convertedObject) 
            }
            let todaysValue = stocksArray[0].value
            let yesterdaysValue = stocksArray[1].value
            let differenceFromDayBefore = (todaysValue - yesterdaysValue)
            let differencePercentage = (differenceFromDayBefore / yesterdaysValue) * 100
            const tickerObject = {
                name: symbol,
                value: todaysValue.toFixed(2),
                percentage: differencePercentage.toFixed(2)
                }
        
            return tickerObject
        }
    )};

    