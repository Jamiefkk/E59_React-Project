import React, { useState, useEffect }from 'react'
import StockTicker from '../TickerComponents/StockTicker'
import styled from 'styled-components';
import { getDailyTickerDataBySymbol } from '../services/TickerService';

const HeaderContainer = () => {

 const [ticker, setTicker] = useState([])

 function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

 useEffect(() => {
    const copyTicker = [...ticker]
    
    getDailyTickerDataBySymbol('IBM')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'IBM')
             copyTicker.push(tickerObject)
         })
    getDailyTickerDataBySymbol('AAPL')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'AAPL')
             copyTicker.push(tickerObject)
         })
    getDailyTickerDataBySymbol('AMZN')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'AMZN')
             copyTicker.push(tickerObject)
         })
    getDailyTickerDataBySymbol('GOOGL')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'GOOGL')
             copyTicker.push(tickerObject)
         })
    getDailyTickerDataBySymbol('MSFT')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'MSFT')
             copyTicker.push(tickerObject)            
         })
    getDailyTickerDataBySymbol('TSLA')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'TSLA')
             copyTicker.push(tickerObject)            
         })
    getDailyTickerDataBySymbol('XOM')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'XOM')
             copyTicker.push(tickerObject)            
         })
    getDailyTickerDataBySymbol('WMT')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'WMT')
             copyTicker.push(tickerObject)
         })
    getDailyTickerDataBySymbol('NVDA')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'NVDA')
             copyTicker.push(tickerObject)              
         })
    getDailyTickerDataBySymbol('META')
         .then(tickerData => {
             const tickerObject = createTickerData(tickerData, 'META')
             copyTicker.push(tickerObject)
         })
    setTickerDelay(copyTicker)
 }, [])
    const setTickerDelay = (copyTicker) => {
        wait(3000)
        setTicker(copyTicker)
    }
    const createTickerData = (loadedData, label) => {
        let todaysValue = loadedData[0].value
        let yesterdaysValue = loadedData[1].value
        let differenceFromDayBefore = (todaysValue - yesterdaysValue)
        let differencePercentage = (differenceFromDayBefore / yesterdaysValue) * 100
        const tickerObject = {
            name: label,
            value: todaysValue.toFixed(2),
            percentage: differencePercentage.toFixed(2)
        }
        return tickerObject

    }
  
  return (
    <>
    <Image src="FGHLogo.jpeg"></Image>
    <StockTicker ticker={ticker}/>
    </>
  )
}
const Image = styled.img`
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;

`
export default HeaderContainer