import { useEffect, useState } from "react"
import { getDailyBySymbol } from "../services/StockServices"
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import StockTicker from "../components/StockTicker"
import StockChart from "../StocksInfoComponents/StockChart"
import { getDailyTickerDataBySymbol } from "../services/TickerService"

const StocksInfoContainer = () => {

    const[comparePercent, setComparePercent] = useState(true)
    
    const [IBMDaily, setIBMDaily] = useState([])
    const [AAPLDaily, setAAPLDaily] = useState([])
    const [MSFTDaily, setMSFTDaily] = useState([])
    const [TSLADaily, setTSLADaily] = useState([])
    const [XOMDaily, setXOMDaily] = useState([])
    const [WMTDaily, setWMTDaily] = useState([])
    const [NVDADaily, setNVDADaily] = useState([])
    const [METADaily, setMETADaily] = useState([])
    const [ticker, setTicker] = useState([])


    useEffect( () => {
        getDailyBySymbol('IBM')
            .then(allDaily => {
                setIBMDaily(allDaily)
            })
        getDailyBySymbol('AAPL')
            .then(allDaily => {
                setAAPLDaily(allDaily)
            })
        getDailyBySymbol('MSFT')
            .then(allDaily => {
                setMSFTDaily(allDaily)         
            })
        getDailyBySymbol('TSLA')
            .then(allDaily => {
                setTSLADaily(allDaily)         
            })
        getDailyBySymbol('XOM')
            .then(allDaily => {
                setXOMDaily(allDaily)   
            })
        getDailyBySymbol('WMT')
            .then(allDaily => {
                setWMTDaily(allDaily)
            })
        getDailyBySymbol('NVDA')
            .then(allDaily => {
                setNVDADaily(allDaily)        
            })
        getDailyBySymbol('META')
            .then(allDaily => {
                setMETADaily(allDaily)
            })

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
    
            setTicker(copyTicker)

    }, [])

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

    const flipComparePercent = () => {
        setComparePercent(!comparePercent);
    }

    
   return(
    <>
      <StockTicker ticker={ticker}/>
      <StockChart 
        IBM={IBMDaily} 
        AAPL={AAPLDaily} 
        MSFT={MSFTDaily}
        TSLA={TSLADaily}
        XOM={XOMDaily}
        WMT={WMTDaily}
        NVDA={NVDADaily}
        META={METADaily}
        comparePercent={comparePercent}/>
    </>
   )
}

export default StocksInfoContainer

