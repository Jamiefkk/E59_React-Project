import React from 'react'


const OwnedShares = ({myStocks, IBMDaily, WMTDaily, TSLADaily, AAPLDaily, MSFTDaily, METADaily, NVDADaily, XOMDaily}) => {
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
                
                
                const cValUserWMTStocks = WMTDaily[0].y * userWMTStocks.length
                const cValUserIBMStocks = IBMDaily[0].y * userIBMStocks.length
                const cValUserTSLAStocks = TSLADaily[0].y * userTSLAStocks.length
                const cValUserAAPLStocks = AAPLDaily[0].y * userAAPLStocks.length
                const cValUserMSFTStocks = MSFTDaily[0].y * userMSFTStocks.length
                const cValUserMETAStocks = METADaily[0].y * userMETAStocks.length
                const cValUserNVDAStocks = NVDADaily[0].y * userNVDAStocks.length
                const cValUserXOMStocks = XOMDaily[0].y * userXOMStocks.length
        
                const cVal = cValUserWMTStocks + cValUserIBMStocks + cValUserTSLAStocks + cValUserAAPLStocks + cValUserMSFTStocks + cValUserMETAStocks + cValUserNVDAStocks + cValUserXOMStocks
                return cVal
            }
        }
  
    const portfolioTotal = getPortfolioTotal()
    const cVal = getCVal();

  return (
    <>

    {myStocks.length === 0 ? 
        <>Add some stocks to your portfolio</>
    : 
    <>

        <div>Investment: ${portfolioTotal.toFixed(2)}</div>
        <br></br>
        <div>Portfolio Value: ${cVal.toFixed(2)}</div>
    </>
    }
    </>
  )
}

export default OwnedShares