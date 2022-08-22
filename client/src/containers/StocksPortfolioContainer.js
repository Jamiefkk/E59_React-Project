import React, {useEffect, useState} from 'react';
import OwnedShares from '../portfoliocomponents/OwnedShares';
import StocksList from '../portfoliocomponents/StocksList';
import { getStocks } from '../services/PortfolioService';

const StocksPortfolioContainer = () => {

  const [myStocks, setMyStocks] = useState([])

  useEffect(()=>{
    getStocks().then((allStocks)=>{
      setMyStocks(allStocks);
    })
  }, [myStocks]);



  return (
    <>
      <OwnedShares myStocks={myStocks}/>
      <StocksList/>

    </>
  )
}

export default StocksPortfolioContainer;