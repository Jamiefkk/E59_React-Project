import React, {useState, useEffect} from 'react'
import { getDailyBySymbol } from '../services/StockServices'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'
import StockTickerItem from './StockTickerItem'
import { getDailyTickerDataBySymbol } from '../services/TickerService'


const StockTicker = ({ticker}) => {

    // const [IBMDaily, setIBMDaily] = useState([])
    // const [AAPLDaily, setAAPLDaily] = useState([])
    // const [MSFTDaily, setMSFTDaily] = useState([])
    // const [TSLADaily, setTSLADaily] = useState([])
    // const [XOMDaily, setXOMDaily] = useState([])
    // const [WMTDaily, setWMTDaily] = useState([])
    // const [NVDADaily, setNVDADaily] = useState([])
    // const [METADaily, setMETADaily] = useState([])
    // const [ticker, setTicker] = useState([])


    // useEffect( () => {

    //     const copyTicker = [...ticker]

    //     getDailyTickerDataBySymbol('IBM')
    //         .then(allDaily => {
    //             setIBMDaily(allDaily)
    //             const tickerObject = createTickerData(allDaily, 'IBM')
    //             copyTicker.push(tickerObject)
    //         })
    //     getDailyTickerDataBySymbol('AAPL')
    //         .then(allDaily => {
    //             setAAPLDaily(allDaily)
    //             const tickerObject = createTickerData(allDaily, 'AAPL')
    //             copyTicker.push(tickerObject)
    //         })
    //     getDailyTickerDataBySymbol('MSFT')
    //         .then(allDaily => {
    //             setMSFTDaily(allDaily)
    //             const tickerObject = createTickerData(allDaily, 'MSFT')
    //             copyTicker.push(tickerObject)            
    //         })
    //     getDailyTickerDataBySymbol('TSLA')
    //         .then(allDaily => {
    //             setTSLADaily(allDaily)
    //             const tickerObject = createTickerData(allDaily, 'TSLA')
    //             copyTicker.push(tickerObject)            
    //         })
    //     getDailyTickerDataBySymbol('XOM')
    //         .then(allDaily => {
    //             setXOMDaily(allDaily)
    //             const tickerObject = createTickerData(allDaily, 'XOM')
    //             copyTicker.push(tickerObject)            
    //         })
    //     getDailyTickerDataBySymbol('WMT')
    //         .then(allDaily => {
    //             setWMTDaily(allDaily)
    //             const tickerObject = createTickerData(allDaily, 'WMT')
    //             copyTicker.push(tickerObject)
    //         })
    //     getDailyTickerDataBySymbol('NVDA')
    //         .then(allDaily => {
    //             setNVDADaily(allDaily)
    //             const tickerObject = createTickerData(allDaily, 'NVDA')
    //             copyTicker.push(tickerObject)              
    //         })
    //     getDailyTickerDataBySymbol('META')
    //         .then(allDaily => {
    //             setMETADaily(allDaily)
    //             const tickerObject = createTickerData(allDaily, 'META')
    //             copyTicker.push(tickerObject)
    //         })

    //     setTicker(copyTicker)

        
    // }, [])

    // const createTickerData = (loadedData, label) => {
    //     let todaysValue = loadedData[0].value
    //     let yesterdaysValue = loadedData[1].value
    //     let differenceFromDayBefore = (todaysValue - yesterdaysValue)
    //     let differencePercentage = (differenceFromDayBefore / yesterdaysValue) * 100
    //     const tickerObject = {
    //         name: label,
    //         value: todaysValue.toFixed(2),
    //         percentage: differencePercentage.toFixed(2)
    //     }
    //     return tickerObject

    // }


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