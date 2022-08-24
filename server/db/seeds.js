const fetch = require('node-fetch')

function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

const getStocks = async function(symbol, timePoint) {
    let apiPath = "";
    if (timePoint=='Daily') {
        apiPath = "Time Series (Daily)"
    } else if (timePoint=='Weekly') {
        apiPath = "Weekly Time Series"
    } else if (timePoint=='Monthly'){
        apiPath = "Monthly Time Series"
    }
    return await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_${timePoint}&symbol=${symbol}&outputsize=full&apikey=BU5R6SXCHWVB2NP0`)
        .then(res => res.json())
        .then(result => result[apiPath])
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

db.users.insertMany([
    {
        name: 'Ethan',
        wallet: 1000,
        portfolio: [
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "TSLA",
                "purchaseValue": 877.51,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              },
            {
                "key": "WMT",
                "purchaseValue": 135.47,
                "date": 1661331149064
              }
        ]
    },
    {
        name: 'Jamie',
        wallet: 4000,
        portfolio: [
            {
              "key": "META",
              "purchaseValue": 272.94,
              "date": 1661331149064
            },
            {
              "key": "META",
              "purchaseValue": 272.94,
              "date": 1661331149064
            },
            {
              "key": "META",
              "purchaseValue": 272.94,
              "date": 1661331149064
            },
            {
              "key": "META",
              "purchaseValue": 272.94,
              "date": 1661331149064
            },
            {
              "key": "META",
              "purchaseValue": 272.94,
              "date": 1661331149064
            },
            {
              "key": "NVDA",
              "purchaseValue": 246.38,
              "date": 1661331149900
            },
            {
              "key": "NVDA",
              "purchaseValue": 246.38,
              "date": 1661331149900
            },
            {
              "key": "NVDA",
              "purchaseValue": 246.38,
              "date": 1661331149900
            },
            {
              "key": "NVDA",
              "purchaseValue": 246.38,
              "date": 1661331149900
            },
            {
              "key": "NVDA",
              "purchaseValue": 246.38,
              "date": 1661331149900
            },
            {
              "key": "NVDA",
              "purchaseValue": 246.38,
              "date": 1661331149900
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            },
            {
              "key": "MSFT",
              "purchaseValue": 315.41,
              "date": 1661331151334
            }
          ]
    },
    {
        name: 'Andrew',
        wallet: 9000,
        portfolio: [
            {
                "key": "META",
                "purchaseValue": 272.94,
                "date": 1661331149064
              },
              {
                "key": "META",
                "purchaseValue": 272.94,
                "date": 1661331149064
              },
              {
                "key": "META",
                "purchaseValue": 272.94,
                "date": 1661331149064
              },
              {
                "key": "MSFT",
                "purchaseValue": 315.41,
                "date": 1661331151334
              },
              {
                "key": "MSFT",
                "purchaseValue": 315.41,
                "date": 1661331151334
              }
        ]
    }
])

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
    db.MSFTDaily.insertMany(microsoftStocksToInsert);
    db.NVDADaily.insertMany(nvidiaStocksToInsert);
    db.METADaily.insertMany(metaStocksToInsert);
    db.WMTDaily.insertMany(walmartStocksToInsert);
    db.XOMDaily.insertMany(exxonStocksToInsert);
}

// const waitingForFetch3 = async function() {
//     const timePoint = 'Weekly'
//     const IBMStocksToInsert = await unpackStocks('IBM', timePoint)
//     const appleStocksToInsert = await unpackStocks('AAPL', timePoint)
//     const googleStocksToInsert = await unpackStocks('GOOGL', timePoint)
//     const teslaStocksToInsert = await unpackStocks('TSLA', timePoint)
//     const amazonStocksToInsert = await unpackStocks('AMZN', timePoint)
//     db.IBMWeekly.insertMany(IBMStocksToInsert);
//     db.AAPLWeekly.insertMany(appleStocksToInsert);
//     db.GOOGLWeekly.insertMany(googleStocksToInsert);
//     db.TSLAWeekly.insertMany(teslaStocksToInsert);
//     db.AMZNWeekly.insertMany(amazonStocksToInsert);
// }

// const waitingForFetch4 = async function() {
//     const timePoint = 'Weekly'
//     const microsoftStocksToInsert = await unpackStocks('MSFT', timePoint)
//     const nvidiaStocksToInsert = await unpackStocks('NVDA', timePoint)
//     const metaStocksToInsert = await unpackStocks('META', timePoint)
//     const walmartStocksToInsert = await unpackStocks('WMT', timePoint)
//     const exxonStocksToInsert = await unpackStocks('XOM', timePoint)
//     db.MSFTWeekly.insertMany(microsoftStocksToInsert);
//     db.NVDAWeekly.insertMany(nvidiaStocksToInsert);
//     db.METAWeekly.insertMany(metaStocksToInsert);
//     db.WMTWeekly.insertMany(walmartStocksToInsert);
//     db.XOMWeekly.insertMany(exxonStocksToInsert);
// }

// const waitingForFetch5 = async function() {
//     const timePoint = 'Monthly'
//     const IBMStocksToInsert = await unpackStocks('IBM', timePoint)
//     const appleStocksToInsert = await unpackStocks('AAPL', timePoint)
//     const googleStocksToInsert = await unpackStocks('GOOGL', timePoint)
//     const teslaStocksToInsert = await unpackStocks('TSLA', timePoint)
//     const amazonStocksToInsert = await unpackStocks('AMZN', timePoint)
//     db.IBMMonthly.insertMany(IBMStocksToInsert);
//     db.AAPLMonthly.insertMany(appleStocksToInsert);
//     db.GOOGLMonthly.insertMany(googleStocksToInsert);
//     db.TSLAMonthly.insertMany(teslaStocksToInsert);
//     db.AMZNMonthly.insertMany(amazonStocksToInsert);
// }

// const waitingForFetch6 = async function() {
//     const timePoint = 'Monthly'
//     const microsoftStocksToInsert = await unpackStocks('MSFT', timePoint)
//     const nvidiaStocksToInsert = await unpackStocks('NVDA', timePoint)
//     const metaStocksToInsert = await unpackStocks('META', timePoint)
//     const walmartStocksToInsert = await unpackStocks('WMT', timePoint)
//     const exxonStocksToInsert = await unpackStocks('XOM', timePoint)
//     db.MSFTMonthly.insertMany(microsoftStocksToInsert);
//     db.NVDAMonthly.insertMany(nvidiaStocksToInsert);
//     db.METAMonthly.insertMany(metaStocksToInsert);
//     db.WMTMonthly.insertMany(walmartStocksToInsert);
//     db.XOMMonthly.insertMany(exxonStocksToInsert);
// }

const callAPI = async () => {
    console.log("1st fetch starts");
    await waitingForFetch1();
    console.log("1st fetch ends");
    wait(60000);
    console.log("2nd fetch starts");
    await waitingForFetch2();
    console.log("2nd fetch ends");
    // wait(60000);
    // console.log("3rd fetch starts");
    // await waitingForFetch3();
    // console.log("3rd fetch ends");
    // wait(60000);
    // console.log("4th fetch starts");
    // await waitingForFetch4();
    // console.log("4th fetch ends");
    // wait(60000);
    // console.log("5th fetch starts");
    // await waitingForFetch5();
    // console.log("5th fetch ends");
    // wait(60000);
    // console.log("6th fetch starts");
    // await waitingForFetch6();
    // console.log("6th fetch ends");
}

callAPI();
