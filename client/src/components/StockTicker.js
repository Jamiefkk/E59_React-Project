import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'
import StockTickerItem from './StockTickerItem'


const StockTicker = ({ticker}) => {

const tickerNodes = ticker.map((tickerObject, index) => {
    return(
        <StockTickerItem key={index}
            name={tickerObject.name}
            value={tickerObject.value}
            percentage={tickerObject.percentage}
        />
    )
})

return (
        <Marquee pauseOnHover={true}>
            {tickerNodes}
        </Marquee>
  )

}

export default StockTicker