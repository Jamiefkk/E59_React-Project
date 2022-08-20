const fetch = require('node-fetch')

function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

const getStocks = async function(symbol, timePoint) {
    console.log(symbol);
    console.log("timepoint" + timePoint);
    return await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_${timePoint}&symbol=${symbol}&outputsize=full&apikey=BU5R6SXCHWVB2NP0`)
        .then(res => res.json())
        .then(result => result[`Time Series (${timePoint})`])
}

const unpackStocks = async function(symbol, timePoint) {
    const stocks = await getStocks(symbol, timePoint);

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
    const timePoint = 'Daily'
    const IBMStocksToInsert = await unpackStocks('IBM', timePoint)
    const appleStocksToInsert = await unpackStocks('AAPL', timePoint)
    const googleStocksToInsert = await unpackStocks('GOOGL', timePoint)
    const teslaStocksToInsert = await unpackStocks('TSLA', timePoint)
    const amazonStocksToInsert = await unpackStocks('AMZN', timePoint)
    db.IBMDaily.insertMany(IBMStocksToInsert);
    db.AAPLDaily.insertMany(appleStocksToInsert);
    db.GOOGLDaily.insertMany(googleStocksToInsert);
    db.TSLADaily.insertMany(teslaStocksToInsert);
    db.AMZNDaily.insertMany(amazonStocksToInsert);
}

const waitingForFetch2 = async function() {
    const timePoint = 'Daily'
    const microsoftStocksToInsert = await unpackStocks('MSFT', timePoint)
    const nvidiaStocksToInsert = await unpackStocks('NVDA', timePoint)
    const metaStocksToInsert = await unpackStocks('META', timePoint)
    const walmartStocksToInsert = await unpackStocks('WMT', timePoint)
    const exxonStocksToInsert = await unpackStocks('XOM', timePoint)
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
