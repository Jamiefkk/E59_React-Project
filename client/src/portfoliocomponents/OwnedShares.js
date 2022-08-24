import React from 'react'

const OwnedShares = ({myStocks, getCVal}) => {
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
  
    const portfolioTotal = getPortfolioTotal()
    const cVal = getCVal();

  return (
    <>

    {myStocks.length === 0 ? 
        <>Add some stocks to your portfolio</>
    : 
    <>
        <div>TPC: ${portfolioTotal.toFixed(2)}</div>
        <div>ADJVal: ${cVal.toFixed(2)}</div>
    </>
    }
    </>
  )
}

export default OwnedShares