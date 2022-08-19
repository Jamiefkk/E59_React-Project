const fetch = require('node-fetch')

const getStocks = function() {
    return fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&interval=5min&apikey=BU5R6SXCHWVB2NP0")
        .then(res => res.json())
        .then(result => result["Time Series (Daily)"])
}

const unpackStocks = async function() {
    const stocks = await getStocks();

    const stockEntries = Object.entries(stocks)
   
    const stockObjects = stockEntries.map((entry)=>{
        return {
            date: entry[0],
            info: entry[1]
        }
    })
    
    return stockObjects
    
}

const stocksToInsert = unpackStocks()

console.log(stocksToInsert);

use stocks
db.dropDatabase()

db.IBMDaily.insertMany(
    stocksToInsert
)
