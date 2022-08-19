const fetch = require('node-fetch')

const getStocks = function() {
    return fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&interval=5min&apikey=BU5R6SXCHWVB2NP0")
        .then(res => res.json())
        .then(result => result["Time Series (Daily)"])
}

const unpackStocks = async function() {
    const stockArray = []
    const stocks = await getStocks();

    console.log(stocks);


    // for (const stock in stocks) {
    //     const stockObject = new Object(stock);
    //     stockArray.push(stockObject);
    // }
    for (let i = 0; stocks.length; i++) {
        const stockObject = new Object(stocks[i]);
        stockArray.push(stockObject)
    }

    return stockArray
}

const stocksToInsert = unpackStocks()

console.log(stocksToInsert);

// use stocks
// // db.dropDatabase()

// db.IBMDaily.insertMany(
//     stocksToInsert
// )

