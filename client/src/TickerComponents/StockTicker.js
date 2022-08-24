import React from 'react'
import Marquee from 'react-fast-marquee'
import StockTickerItem from './StockTickerItem'


const StockTicker = ({IBM, AAPL, AMZN, GOOGL, MSFT, TSLA, XOM, WMT, NVDA, META}) => {

const ticker = [IBM, AAPL, AMZN, GOOGL, MSFT, TSLA, XOM, WMT, NVDA, META]

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
        <Marquee gradientColor={[245, 240, 218]} pauseOnHover={true}>
            {tickerNodes}
        </Marquee>
  )

}



export default StockTicker