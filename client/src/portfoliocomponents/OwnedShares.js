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
            const userWMTStocks = myStocks.filter((stock) => stock.key === "WMT")
            const userIBMStocks = myStocks.filter((stock) => stock.key === "IBM")
            const userTSLAStocks = myStocks.filter((stock) => stock.key === "TSLA")
            const userAAPLStocks = myStocks.filter((stock) => stock.key === "AAPL")
            const userMSFTStocks = myStocks.filter((stock) => stock.key === "MSFT")
            const userMETAStocks = myStocks.filter((stock) => stock.key === "META")
            const userNVDAStocks = myStocks.filter((stock) => stock.key === "NVDA")
            const userXOMStocks = myStocks.filter((stock) => stock.key === "XOM")
        
        
            const cValUserWMTStocks = WMT[0].y * userWMTStocks.length
            const cValUserIBMStocks = IBM[0].y * userIBMStocks.length
            const cValUserTSLAStocks = TSLA[0].y * userTSLAStocks.length
            const cValUserAAPLStocks = AAPL[0].y * userAAPLStocks.length
            const cValUserMSFTStocks = MSFT[0].y * userMSFTStocks.length
            const cValUserMETAStocks = META[0].y * userMETAStocks.length
            const cValUserNVDAStocks = NVDA[0].y * userNVDAStocks.length
            const cValUserXOMStocks = XOM[0].y * userXOMStocks.length
           


            // console.log('WMTD: ', WMTTD);
            // console.log('totWMT: ', totWMT);


            // console.log('IBMTD: ', IBMTD, typeof(IBMTD));
            // console.log('totIBM: ', totIBM);

            // console.log('TSLATD: ', TSLATD, typeof(TSLATD));
            // console.log('totTSLA: ', totTSLA);

            // console.log('AAPLTD: ', AAPLTD, typeof(AAPLTD));
            // console.log('totAAPL: ', totAAPL);

            // console.log('MSFTTD: ', MSFTTD, typeof(MSFTTD));
            // console.log('totMSFT: ', totMSFT);

            // console.log('METATD: ', METATD, typeof(METATD));
            // console.log('totMETA: ', totMETA);

            // console.log('NVDATD: ', NVDATD, typeof(NVDATD));
            // console.log('totNVDA: ', totNVDA);

            // console.log('XOMTD: ', XOMTD, typeof(XOMTD));
            // console.log('totXOM: ', totXOM);
        
            const cVal = cValUserWMTStocks + cValUserIBMStocks + cValUserTSLAStocks + cValUserAAPLStocks + cValUserMSFTStocks + cValUserMETAStocks + cValUserNVDAStocks + cValUserXOMStocks

            console.log('cVal during call', cVal);
            return cVal
        }
    }
  
    const portfolioTotal = getPortfolioTotal()
    const cVal = getCVal();

    console.log('cVal after call: ', cVal);

  return (
    <>

    {myStocks.length === 0 ? 
        <>Add some stocks to your portfolio</>
    : 
    <>
        <div>Total Portfolio Cost: ${portfolioTotal.toFixed(2)}</div>
        <div>Adjusted Current Value of Portfolio: ${cVal}</div>
    </>
    }
    </>
  )
}

export default OwnedShares