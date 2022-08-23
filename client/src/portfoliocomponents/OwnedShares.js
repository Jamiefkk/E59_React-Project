import React, { useState, useEffect } from 'react'
import { getDailyBySymbol } from '../services/PortfolioService'

const OwnedShares = ({myStocks}) => {
  const newStonks = []
  const stonks = myStocks.map((n) => {
      newStonks.push(n.purchaseValue)
  })
  const initialValue = 0
  const portfolioTotal = newStonks.reduce((previousValue, currentValue) => 
    parseFloat(previousValue) + parseFloat(currentValue), initialValue)

    


  return (
    <>
    <div>Total Portfolio Cost: ${portfolioTotal.toFixed(2)}</div>
    {/* <div>Current Adjusted Portfolio Value: ${cVal.toFixed(2)}</div> */}
    </>
  )
}

export default OwnedShares