import React, {useEffect, useState} from 'react';
import Compare from '../portfoliocomponents/Compare';
import OwnedShares from '../portfoliocomponents/OwnedShares';
import Pie from '../portfoliocomponents/PieChart';
import StocksList from '../portfoliocomponents/StocksList';
import { getStocks } from '../services/PortfolioService';
import { getDailyBySymbol } from '../services/PortfolioService';

const StocksPortfolioContainer = () => {

  const [myStocks, setMyStocks] = useState([])
  const [IBMDaily, setIBMDaily] = useState([])
  const [AAPLDaily, setAAPLDaily] = useState([])
  const [MSFTDaily, setMSFTDaily] = useState([])
  const [TSLADaily, setTSLADaily] = useState([])
  const [XOMDaily, setXOMDaily] = useState([])
  const [WMTDaily, setWMTDaily] = useState([])
  const [NVDADaily, setNVDADaily] = useState([])
  const [METADaily, setMETADaily] = useState([])

  useEffect(()=>{
    getStocks().then((allStocks)=>{
      setMyStocks(allStocks);
    })
  }, []);
  
    const addToPortfolio = (stock) => {
      const copyMyStocks = [...myStocks, stock]
      setMyStocks(copyMyStocks)
    }

    useEffect(() => {
      getDailyBySymbol('IBM')
          .then(allIBMDaily => {
              const today = allIBMDaily.slice(0, 1)
              setIBMDaily(today)
          });
      getDailyBySymbol('AAPL')
          .then(allAAPLDaily => {
              const today = allAAPLDaily.slice(0, 1)
              setAAPLDaily(today)
          });
      getDailyBySymbol('TSLA')
          .then(allTSLADaily => {
              const today = allTSLADaily.slice(0, 1)
              setTSLADaily(today)
          });
      getDailyBySymbol('MSFT')
          .then(allMSFTDaily => {
              const today = allMSFTDaily.slice(0, 1)
              setMSFTDaily(today)
          })
      getDailyBySymbol('XOM')
          .then(allXOMDaily => {
              const today = allXOMDaily.slice(0, 1)
              setXOMDaily(today)
          })
      getDailyBySymbol('WMT')
          .then(allWMTDaily => {
              const today = allWMTDaily.slice(0, 1)
              setWMTDaily(today)
          })
      getDailyBySymbol('NVDA')
          .then(allNVDADaily => {
              const today = allNVDADaily.slice(0, 1)
              setNVDADaily(today)
          })
      getDailyBySymbol('META')
          .then(allMETADaily => {
              const today = allMETADaily.slice(0, 1)
              setMETADaily(today)
          })
  }, [])
  return (
    <>
      <OwnedShares IBM={IBMDaily} MSFT={MSFTDaily} META={METADaily} NVDA={NVDADaily} AAPL={AAPLDaily} WMT={WMTDaily} XOM={XOMDaily} TSLA={TSLADaily} myStocks={myStocks}/>
      <StocksList addToPortfolio={addToPortfolio}/>
      <Pie myStocks={myStocks}/>
      {/* <Compare IBM={IBMDaily} MSFT={MSFTDaily} META={METADaily} NVDA={NVDADaily} AAPL={AAPLDaily} WMT={WMTDaily} XOM={XOMDaily} TSLA={TSLADaily} myStocks={myStocks}/> */}
    </>
  )
}

export default StocksPortfolioContainer;