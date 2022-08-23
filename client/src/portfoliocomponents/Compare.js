import React, { useState, useEffect } from 'react'
import { getDailyBySymbol } from '../services/PortfolioService'

const Compare = ({myStocks}) => {
    // const [IBMDaily, setIBMDaily] = useState([])
    // const [AAPLDaily, setAAPLDaily] = useState([])
    // const [MSFTDaily, setMSFTDaily] = useState([])
    // const [TSLADaily, setTSLADaily] = useState([])
    // const [XOMDaily, setXOMDaily] = useState([])
    // const [WMTDaily, setWMTDaily] = useState([])
    // const [NVDADaily, setNVDADaily] = useState([])
    // const [METADaily, setMETADaily] = useState([])
    const [todaysStocks, setTodaysStocks] = useState([])
   

    useEffect(() => {
        const copyTodaysStocks = [...todaysStocks]
        getDailyBySymbol('IBM')
            .then(allIBMDaily => {
                const today = allIBMDaily.slice(0, 1)
                copyTodaysStocks.push(today)
            });
        getDailyBySymbol('AAPL')
            .then(allAAPLDaily => {
                const today = allAAPLDaily.slice(0, 1)
                copyTodaysStocks.push(today)
                
            });
        getDailyBySymbol('TSLA')
            .then(allTSLADaily => {
                const today = allTSLADaily.slice(0, 1)
                copyTodaysStocks.push(today)
                
            });
        getDailyBySymbol('MSFT')
            .then(allMSFTDaily => {
                const today = allMSFTDaily.slice(0, 1)
                copyTodaysStocks.push(today)
                
            })
        getDailyBySymbol('XOM')
            .then(allXOMDaily => {
                const today = allXOMDaily.slice(0, 1)
                copyTodaysStocks.push(today)
                
            })
        getDailyBySymbol('WMT')
            .then(allWMTDaily => {
                const today = allWMTDaily.slice(0, 1)
                copyTodaysStocks.push(today)
                
            })
        getDailyBySymbol('NVDA')
            .then(allNVDADaily => {
                const today = allNVDADaily.slice(0, 1)
                copyTodaysStocks.push(today)
                
            })
        getDailyBySymbol('META')
            .then(allMETADaily => {
                const today = allMETADaily.slice(0, 1)
                copyTodaysStocks.push(today)
                
            })
    }, [])

    const WMTVal = myStocks.filter((stock) => stock.key === "WMT")
    const IBMVal = myStocks.filter((stock) => stock.key === "IBM")
    const TSLAVal = myStocks.filter((stock) => stock.key === "TSLA")
    const AAPLVal = myStocks.filter((stock) => stock.key === "AAPL")
    const MSFTVal = myStocks.filter((stock) => stock.key === "MSFT")
    const METAVal = myStocks.filter((stock) => stock.key === "META")
    const NVDAVal = myStocks.filter((stock) => stock.key === "NVDA")
    const XOMVal = myStocks.filter((stock) => stock.key === "XOM")

    const totWMT = WMTVal.length
    const totIBM = IBMVal.length
    const totTSLA = TSLAVal.length
    const totAAPL = AAPLVal.length
    const totMSFT = MSFTVal.length
    const totMETA = METAVal.length
    const totNVDA = NVDAVal.length
    const totXOM = XOMVal.length

    const cWMTVal = todaysStocks.filter((stock) => stock.key === "WMT")
    const cIBMVal = todaysStocks.filter((stock) => stock.key === "IBM")
    const cTSLAVal = todaysStocks.filter((stock) => stock.key === "TSLA")
    const cAAPLVal = todaysStocks.filter((stock) => stock.key === "AAPL")
    const cMSFTVal = todaysStocks.filter((stock) => stock.key === "MSFT")
    const cMETAVal = todaysStocks.filter((stock) => stock.key === "META")
    const cNVDAVal = todaysStocks.filter((stock) => stock.key === "NVDA")
    const cXOMVal = todaysStocks.filter((stock) => stock.key === "XOM")
    console.log(todaysStocks);



    // const cVal = ((WMTDaily[0].y * totWMT) + (IBMDaily[0].y * totIBM) + (TSLADaily[0].y * totTSLA) + (AAPLDaily[0].y * totAAPL) + (MSFTDaily[0].y * totMSFT) + (METADaily[0].y + totMETA) + (NVDADaily[0].y * totNVDA) + (XOMDaily[0].y * totXOM))

  return (
    <div></div>
  )
}

export default Compare