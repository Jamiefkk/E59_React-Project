import React, { useState, useEffect }from 'react'
import StockTicker from '../TickerComponents/StockTicker'
import styled from 'styled-components';
import { getDailyTickerDataBySymbol } from '../services/TickerService';

const HeaderContainer = () => {

    const [ticker, setTicker] = useState([])

 useEffect(() => {
    const symbols = []
    
    const tickerPromises = symbols.map((symbol) => {
        return getDailyTickerDataBySymbol(symbol)
    });

    Promise.all(tickerPromises).then(tickerData => setTicker(tickerData))  
 }, [])

return (
    <>
        <Image src="FGHLogo.jpeg"></Image>
        <StockTicker 
            ticker={ticker}
            />
        
    </>
)
}

const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 140px;
    width: 125px;

`
export default HeaderContainer