import React, {useEffect, useState} from 'react'
import StocksList from '../portfoliocomponents/StocksList'

const StocksPortfolioContainer = () => {

  const [myStocks, setMyStocks] = useState([])

  const addToPortfolio = (stock) => {
    const newArray = [...myStocks, stock]
    setMyStocks(newArray)
  }


  return (
    <>
      <StocksList addToPortfolio={addToPortfolio}/>
    </>
  )
}

export default StocksPortfolioContainer