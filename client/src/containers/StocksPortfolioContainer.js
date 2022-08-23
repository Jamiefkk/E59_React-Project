import React, {useEffect, useState} from 'react';
import OwnedShares from '../portfoliocomponents/OwnedShares';
import Pie from '../portfoliocomponents/PieChart';
import StocksList from '../portfoliocomponents/StocksList';
import { getStocks } from '../services/PortfolioService';

const StocksPortfolioContainer = () => {

  const [myStocks, setMyStocks] = useState([])

  useEffect(()=>{
    getStocks().then((allStocks)=>{
      setMyStocks(allStocks);
    })
  }, []);
  
    const addToPortfolio = (stock) => {
      const copyMyStocks = [...myStocks, stock]
      setMyStocks(copyMyStocks)
    }
  return (
    <>
      <OwnedShares myStocks={myStocks}/>
      <StocksList addToPortfolio={addToPortfolio}/>
      <Pie myStocks={myStocks}/>
    </>
  )
}

export default StocksPortfolioContainer;