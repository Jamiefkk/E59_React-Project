import React from 'react'

const OwnedShares = ({myStocks}) => {
  const newStonks = []
  const stonks = myStocks.map((n) => {
      newStonks.push(n.purchaseValue)
  })
  const initialValue = 0
  const portfolioTotal = newStonks.reduce((previousValue, currentValue) => 
    parseFloat(previousValue) + parseFloat(currentValue), initialValue)

  return (
    <div>Total Portfolio Value: ${portfolioTotal.toFixed(2)}</div>
  )
}

export default OwnedShares