const fetch = require('node-fetch')

const getStocks = function(symbol) {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=BU5R6SXCHWVB2NP0`)
        .then(res => res.json())
        .then(result => result["Time Series (Daily)"])
}

const unpackStocks = async function(symbol) {
    const stocks = await getStocks(symbol);

    const stockEntries = Object.entries(stocks)
   
    const stockObjects = stockEntries.map((entry)=>{
        return {
            date: entry[0],
            info: entry[1]
        }

    })

    return stockObjects.slice(0, 365)
}

use stocks
db.dropDatabase();

const waitingForFetch = async function() {
    const IBMStocksToInsert = await unpackStocks('IBM')
    const appleStocksToInsert = await unpackStocks('AAPL')
    const googleStocksToInsert = await unpackStocks('GOOGL')
    const teslaStocksToInsert = await unpackStocks('TSLA')
    const amazonStocksToInsert = await unpackStocks('AMZN')
    db.IBMDaily.insertMany(IBMStocksToInsert);
    db.AAPLDaily.insertMany(appleStocksToInsert);
    db.GOOGLDaily.insertMany(googleStocksToInsert);
    db.TSLADaily.insertMany(teslaStocksToInsert);
    db.AMZNDaily.insertMany(amazonStocksToInsert);
}

waitingForFetch();