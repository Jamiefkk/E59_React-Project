import React, { useState, useEffect }from 'react'
import StockTicker from '../TickerComponents/StockTicker'
import styled from 'styled-components';
import { getDailyTickerDataBySymbol } from '../services/TickerService';

const HeaderContainer = () => {

 const [IBMTickerObject, setIBMTickerObject] = useState({})
 const [AAPLTickerObject, setAAPLTickerObject] = useState({})
 const [AMZNTickerObject, setAMZNTickerObject] = useState({})
 const [GOOGLTickerObject, setGOOGLTickerObject] = useState({})
 const [MSFTTickerObject, setMSFTTickerObject] = useState({})
 const [TSLATickerObject, setTSLATickerObject] = useState({})
 const [XOMTickerObject, setXOMTickerObject] = useState({})
 const [WMTTickerObject, setWMTTickerObject] = useState({})
 const [NVDATickerObject, setNVDATickerObject] = useState({})
 const [METATickerObject, setMETATickerObject] = useState({})

 useEffect(() => {
    getDailyTickerDataBySymbol('IBM')
         .then(tickerObject => {
            setIBMTickerObject(tickerObject)
         })
    getDailyTickerDataBySymbol('AAPL')
         .then(tickerObject => {
             setAAPLTickerObject(tickerObject)
         })
    getDailyTickerDataBySymbol('AMZN')
         .then(tickerObject => {
             setAMZNTickerObject(tickerObject)
         })
    getDailyTickerDataBySymbol('GOOGL')
         .then(tickerObject => {
             setGOOGLTickerObject(tickerObject)
         })
    getDailyTickerDataBySymbol('MSFT')
         .then(tickerObject => {
             setMSFTTickerObject(tickerObject)            
         })
    getDailyTickerDataBySymbol('TSLA')
         .then(tickerObject => {
             setTSLATickerObject(tickerObject)           
         })
    getDailyTickerDataBySymbol('XOM')
         .then(tickerObject => {
             setXOMTickerObject(tickerObject)            
         })
    getDailyTickerDataBySymbol('WMT')
         .then(tickerObject => {
             setWMTTickerObject(tickerObject)
         })
    getDailyTickerDataBySymbol('NVDA')
         .then(tickerObject => {
             setNVDATickerObject(tickerObject)             
         })
    getDailyTickerDataBySymbol('META')
         .then(tickerObject => {
             setMETATickerObject(tickerObject)
         })     
 }, [])



return (
    <>
        <Image src="FGHLogo.jpeg"></Image>
        <StockTicker 
            IBM={IBMTickerObject} 
            AAPL={AAPLTickerObject} 
            AMZN={AMZNTickerObject}
            GOOGL={GOOGLTickerObject}
            MSFT={MSFTTickerObject}
            TSLA={TSLATickerObject}
            XOM={XOMTickerObject}
            WMT={WMTTickerObject}
            NVDA={NVDATickerObject} 
            META={METATickerObject}
            />
        
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