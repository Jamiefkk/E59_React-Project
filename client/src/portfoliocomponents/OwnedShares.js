import React, { useState, useEffect } from 'react'
import { getDailyBySymbol } from '../services/PortfolioService'

const OwnedShares = ({myStocks, IBM, META, MSFT, XOM, AAPL, TSLA, WMT, NVDA}) => {
  
    const getPortfolioTotal = () => {
        if (myStocks.length === 0) return
        else {
            const newStonks = []
            const stonks = myStocks.map((n) => {
                newStonks.push(n.purchaseValue)
            })
            const initialValue = 0
            const portfolioTotal = newStonks.reduce((previousValue, currentValue) => 
            parseFloat(previousValue) + parseFloat(currentValue), initialValue)
    
            return portfolioTotal
        }
        }
  
    const getCVal = () => {
        if (myStocks.length === 0) return
        else {
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
        
            const cVal = ((WMTTD * totWMT) + (IBMTD * totIBM) + (TSLATD * totTSLA) + (AAPLTD * totAAPL) + (MSFTTD * totMSFT) + (parseInt(METATD + totMETA)) + (NVDATD * totNVDA) + (XOMTD * totXOM))

            return cVal
        }
    }
  
    const portfolioTotal = getPortfolioTotal()
    const cVal = getCVal();

  return (
    <>
    <div>Total Portfolio Cost: ${portfolioTotal.toFixed(2)}</div>
    <div>Adjusted Current Value of Portfolio: ${cVal.toFixed(2)}</div>
    </>
  )
}

export default OwnedShares