import React from 'react'

const OwnedShares = ({myStocks}) => {

  const initialValue = 0
  const portfolioTotal = myStocks.reduce((previousValue, currentValue) => 
    parseFloat(previousValue) + parseFloat(currentValue), initialValue)

  return (
    <div>Total Portfolio Value: ${portfolioTotal.toFixed(2)}</div>
  )
}

export default OwnedShares