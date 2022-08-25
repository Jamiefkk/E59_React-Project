import React from 'react'
import styled from 'styled-components'


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
    const portfolioDifferenceVal = cVal - portfolioTotal
    const portfolioPercentageVal = (portfolioDifferenceVal)/portfolioTotal * 100

    const getPercentageNode = (percentage) => {
        if (percentage > 2.5) {
            return <PercentageVeryPositive>{percentage.toFixed(2)}%</PercentageVeryPositive>
        } else if ( (percentage < 2.5) && (percentage > 0 ) ) {
            return <PercentagePositive>{percentage.toFixed(2)}%</PercentagePositive>
        } else if (percentage === 0) {
            return <PercentageEqual>{percentage.toFixed(2)}%</PercentageEqual>
        } else if ((0 > percentage) && (percentage > -2.5)) {
            return <PercentageNegative>{percentage.toFixed(2)}%</PercentageNegative>
        } else if (percentage < -2.5) {
            return <PercentageVeryNegative>{percentage.toFixed(2)}%</PercentageVeryNegative>
    }
}
    const percentageNode=getPercentageNode(portfolioPercentageVal)
  return (
    <>

    {myStocks.length === 0 ? 
        <>Add some stocks to your portfolio</>
    : 
    <>

        <div><b>Investment:</b> ${portfolioTotal.toFixed(2)}</div>
        <br></br>
        <div><b>PortfolioVal:</b> ${cVal.toFixed(2)}</div>
        <br></br>
        <div><b>PortfolioDif:</b> ${portfolioDifferenceVal.toFixed(2)}</div>
        <br></br>
        <div><b>PortfolioPercentDif:</b> {percentageNode}</div>
    </>
    }
    </>
  )
}

const PercentageVeryPositive = styled.b`
    margin-right: 4px;
    color: gold;
`
const PercentagePositive = styled.span`
    margin-right: 4px;
    color: green;
`
const PercentageEqual = styled.span`
    margin-right: 4px;
    color: black;
`
const PercentageNegative = styled.span`
    margin-right: 5px;
    color: red;
`
const PercentageVeryNegative = styled.b`
    margin-right: 5px;
    color: red;
`
export default OwnedShares