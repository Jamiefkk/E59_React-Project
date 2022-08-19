import React, {useEffect, useState} from 'react'

const SharesPortfolioContainer = () => {

    // const [IBM, setIBM] = useState([]) 
    // const [IBMDaily, setIBMDaily] = useState([]) 
    // useEffect(() => {
    //     fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&interval=5min&apikey=BU5R6SXCHWVB2NP0")
    //     .then(res => res.json())
    //     .then(result => setIBM(result["Time Series (Daily)"]))


    //     const unpackStocks = function() {
    //         console.log("unpack story runs");
    //         const stockArray = []
    //         for (const stock in IBM) {
    //             console.log(stock);
    //             const stockObject = new Object(stock);
    //             stockArray.push(stockObject);
    //         }
    //         return stockArray
    //     }
        
    //     const stocksToInsert = unpackStocks()
    //     setIBMDaily(stocksToInsert)

    // }, [])

  return (
    <div>SharesPortfolioContainer</div>
  )
}

export default SharesPortfolioContainer