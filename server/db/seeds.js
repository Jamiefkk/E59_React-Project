import stocksToInsert from '/getStocks.js'

const stocksToSeed = await stocksToInsert
console.log(stocksToSeed);

use stocks
db.dropDatabase();

db.IBMDaily.insertMany(stocksToInsert);