import React, {useState, useEffect} from 'react'
import { getDailyBySymbol } from '../services/StockServices'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'


const StockTicker = ({ticker}) => {
    const tickerItem = ticker.map(stock=> {
        return <TickerItem key={stock.index}>{stock.name}</TickerItem>
    })




 return (
        <Marquee 
            pauseOnHover={true}
            >
                {tickerItem}
        </Marquee>
  )

}


const TickerItem = styled.div`
    flex-shrink: 0;
    width: 200px;
    box-sizing: border-box;
    padding: 10px;
    margin-right: 15px;
    text-align: center;    
`

export default StockTicker