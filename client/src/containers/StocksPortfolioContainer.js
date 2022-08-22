import React, {useEffect, useState} from 'react'
import OwnedShares from '../portfoliocomponents/OwnedShares'
import StocksList from '../portfoliocomponents/StocksList'
import { postPurchase } from '../services/PortfolioService'

const StocksPortfolioContainer = () => {

  const [myStocks, setMyStocks] = useState([])

  const addToPortfolio = (stock) => {
    const newArray = [...myStocks, stock]
    setMyStocks(newArray)
  }


  return (
    <>
      <OwnedShares myStocks={myStocks}/>
      <StocksList addToPortfolio={addToPortfolio}/>

    </>
  )
}

export default StocksPortfolioContainer