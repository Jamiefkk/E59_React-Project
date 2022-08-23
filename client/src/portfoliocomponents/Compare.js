import React, { useState, useEffect } from 'react'
import { getDailyBySymbol } from '../services/PortfolioService'

const Compare = ({myStocks, IBM, META, MSFT, XOM, AAPL, TSLA, WMT, NVDA}) => {
    // const [IBMDaily, setIBMDaily] = useState([])
    // const [AAPLDaily, setAAPLDaily] = useState([])
    // const [MSFTDaily, setMSFTDaily] = useState([])
    // const [TSLADaily, setTSLADaily] = useState([])
    // const [XOMDaily, setXOMDaily] = useState([])
    // const [WMTDaily, setWMTDaily] = useState([])
    // const [NVDADaily, setNVDADaily] = useState([])
    // const [METADaily, setMETADaily] = useState([])
    // const [todaysStocks, setTodaysStocks] = useState([])
   

    // useEffect(() => {
    //     const copyTodaysStocks = [...todaysStocks]
    //     getDailyBySymbol('IBM')
    //         .then(allIBMDaily => {
    //             const today = allIBMDaily.slice(0, 1)
    //             copyTodaysStocks.push(today)
    //         });
    //     getDailyBySymbol('AAPL')
    //         .then(allAAPLDaily => {
    //             const today = allAAPLDaily.slice(0, 1)
    //             copyTodaysStocks.push(today)
                
    //         });
    //     getDailyBySymbol('TSLA')
    //         .then(allTSLADaily => {
    //             const today = allTSLADaily.slice(0, 1)
    //             copyTodaysStocks.push(today)
                
    //         });
    //     getDailyBySymbol('MSFT')
    //         .then(allMSFTDaily => {
    //             const today = allMSFTDaily.slice(0, 1)
    //             copyTodaysStocks.push(today)
                
    //         })
    //     getDailyBySymbol('XOM')
    //         .then(allXOMDaily => {
    //             const today = allXOMDaily.slice(0, 1)
    //             copyTodaysStocks.push(today)
                
    //         })
    //     getDailyBySymbol('WMT')
    //         .then(allWMTDaily => {
    //             const today = allWMTDaily.slice(0, 1)
    //             copyTodaysStocks.push(today)
                
    //         })
    //     getDailyBySymbol('NVDA')
    //         .then(allNVDADaily => {
    //             const today = allNVDADaily.slice(0, 1)
    //             copyTodaysStocks.push(today)
                
    //         })
    //     getDailyBySymbol('META')
    //         .then(allMETADaily => {
    //             const today = allMETADaily.slice(0, 1)
    //             copyTodaysStocks.push(today)
                
    //         })
    //         setTodaysStocks(copyTodaysStocks)
    // }, [])

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

    let IBMTD = 0
    const IBMT = IBM.map((n) => {
        IBMTD = n.y.toFixed(2)
    })
    let WMTTD = 0
    const WMTT = WMT.map((n) => {
        WMTTD = n.y.toFixed(2)
    })
    let TSLATD = 0
    const TSLAT = TSLA.map((n) => {
        TSLATD = n.y.toFixed(2)
    })
    let AAPLTD = 0
    const AAPLT = AAPL.map((n) => {
        AAPLTD = n.y.toFixed(2)
    })
    let MSFTTD = 0
    const MSFTT = MSFT.map((n) => {
        MSFTTD = n.y.toFixed(2)
    })
    let METATD = 0
    const METAT = META.map((n) => {
        METATD = n.y.toFixed(2)
    })
    let NVDATD = 0
    const NVDAT = NVDA.map((n) => {
        NVDATD = n.y.toFixed(2)
    })
    let XOMTD = 0
    const XOMT = XOM.map((n) => {
        XOMTD = n.y.toFixed(2)
    })
    // const cWMTVal = todaysStocks.filter((stock) => stock[0].key === "WMT")
    // const cIBMVal = todaysStocks.filter((stock) => stock.key === "IBM")
    // const cTSLAVal = todaysStocks.filter((stock) => stock.key === "TSLA")
    // const cAAPLVal = todaysStocks.filter((stock) => stock.key === "AAPL")
    // const cMSFTVal = todaysStocks.filter((stock) => stock.key === "MSFT")
    // const cMETAVal = todaysStocks.filter((stock) => stock.key === "META")
    // const cNVDAVal = todaysStocks.filter((stock) => stock.key === "NVDA")
    // const cXOMVal = todaysStocks.filter((stock) => stock.key === "XOM")
    
    // const one = (WMTTD * totWMT)
    // const two = (IBMTD * totIBM)
    // const three = (TSLATD * totTSLA)
    // const four = (AAPLTD * totAAPL)
    // const five = (MSFTTD * totMSFT)
    // const six = parseInt(METATD + totMETA)
    // const seven = (NVDATD * totNVDA)
    // const eight = (XOMTD * totXOM)
    const cVal = ((WMTTD * totWMT) + (IBMTD * totIBM) + (TSLATD * totTSLA) + (AAPLTD * totAAPL) + (MSFTTD * totMSFT) + (parseInt(METATD + totMETA)) + (NVDATD * totNVDA) + (XOMTD * totXOM))
    // const cVal = one + two + three + four + five + six + seven + eight
    console.log(cVal);
    
  return (
    <div>{cVal}</div>
  )
}

export default Compare