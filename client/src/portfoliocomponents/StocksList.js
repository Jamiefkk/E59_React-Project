import React, { useState, useEffect } from 'react';
import StocksItem from './StocksItem';
import { getDailyBySymbol } from '../services/PortfolioService';

const StocksList = () => {
    
    const [IBMDaily, setIBMDaily] = useState([])
    const [AAPLDaily, setAAPLDaily] = useState([])
    const [MSFTDaily, setMSFTDaily] = useState([])
    const [TSLADaily, setTSLADaily] = useState([])
    const [XOMDaily, setXOMDaily] = useState([])
    const [WMTDaily, setWMTDaily] = useState([])
    const [NVDADaily, setNVDADaily] = useState([])
    const [METADaily, setMETADaily] = useState([])

    useEffect(() => {
        getDailyBySymbol('IBM')
            .then(allIBMDaily => {
                const today = allIBMDaily.slice(0, 2)
                setIBMDaily(today)
                
            });
        getDailyBySymbol('AAPL')
            .then(allAAPLDaily => {
                const today = allAAPLDaily.slice(0, 2)
                setAAPLDaily(today)
                
            });
        getDailyBySymbol('TSLA')
            .then(allTSLADaily => {
                const today = allTSLADaily.slice(0, 2)
                setTSLADaily(today)
                
            });
        getDailyBySymbol('MSFT')
            .then(allMSFTDaily => {
                const today = allMSFTDaily.slice(0, 2)
                setMSFTDaily(today)
                
            })
        getDailyBySymbol('XOM')
            .then(allXOMDaily => {
                const today = allXOMDaily.slice(0, 2)
                setXOMDaily(today)
                
            })
        getDailyBySymbol('WMT')
            .then(allWMTDaily => {
                const today = allWMTDaily.slice(0, 2)
                setWMTDaily(today)
                
            })
        getDailyBySymbol('NVDA')
            .then(allNVDADaily => {
                const today = allNVDADaily.slice(0, 2)
                setNVDADaily(today)
                
            })
        getDailyBySymbol('META')
            .then(allMETADaily => {
                const today = allMETADaily.slice(0, 2)
                setMETADaily(today)
                
            })
    }, [])
 
 
 return (
    <>
        <StocksItem MSFT={MSFTDaily} META={METADaily} NVDA={NVDADaily} WMT={WMTDaily} XOM={XOMDaily} IBM={IBMDaily} TSLA={TSLADaily} AAPL={AAPLDaily}/>
    </>
  )
}

export default StocksList;