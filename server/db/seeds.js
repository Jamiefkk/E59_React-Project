const fetch = require('node-fetch')

function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

const getStocks = function(symbol) {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_Daily&symbol=${symbol}&outputsize=full&apikey=BU5R6SXCHWVB2NP0`)
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

const waitingForFetch1 = async function() {
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

const waitingForFetch2 = async function() {
    const microsoftStocksToInsert = await unpackStocks('MSFT')
    const nvidiaStocksToInsert = await unpackStocks('NVDA')
    const metaStocksToInsert = await unpackStocks('META')
    const walmartStocksToInsert = await unpackStocks('WMT')
    const exxonStocksToInsert = await unpackStocks('XOM')
    db.MFSTDaily.insertMany(microsoftStocksToInsert);
    db.NVDADaily.insertMany(nvidiaStocksToInsert);
    db.METADaily.insertMany(metaStocksToInsert);
    db.WMTDaily.insertMany(walmartStocksToInsert);
    db.XOMDaily.insertMany(exxonStocksToInsert);
}

const callAPI = async () => {
    console.log("First fetch starts");
    await waitingForFetch1();
    console.log("First fetch ends");
    wait(60000);
    console.log("Second fetch starts");
    await waitingForFetch2();
    console.log("Second fetch ends");
}

callAPI();
