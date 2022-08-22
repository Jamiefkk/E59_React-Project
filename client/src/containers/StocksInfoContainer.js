import { useEffect, useState } from "react"
import { getDailyBySymbol } from "../services/StockServices"
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import StockTicker from "../components/StockTicker"
import StockChart from "../StocksInfoComponents/StockChart"

const StocksInfoContainer = () => {

    
    const [IBMDaily, setIBMDaily] = useState([])
    const [AAPLDaily, setAAPLDaily] = useState([])
    const [MSFTDaily, setMSFTDaily] = useState([])
    const [TSLADaily, setTSLADaily] = useState([])
    const [XOMDaily, setXOMDaily] = useState([])
    const [WMTDaily, setWMTDaily] = useState([])
    const [NVDADaily, setNVDADaily] = useState([])
    const [METADaily, setMETADaily] = useState([])
    const [ticker, setTicker] = useState([])


    useEffect(() => {
        getDailyBySymbol('IBM')
            .then(allDaily => {
                setIBMDaily(allDaily)  
                createTickerData(allDaily, 'IBM')
            })
        getDailyBySymbol('AAPL')
            .then(allDaily => {
                setAAPLDaily(allDaily)
                createTickerData(allDaily, 'AAPL')
                
            })
        getDailyBySymbol('MSFT')
            .then(allDaily => {
                setMSFTDaily(allDaily)
                createTickerData(allDaily, 'MSFT')
            })
        getDailyBySymbol('TSLA')
            .then(allDaily => {
                setTSLADaily(allDaily)
                createTickerData(allDaily, 'TSLA')
            })
        getDailyBySymbol('XOM')
            .then(allDaily => {
                setXOMDaily(allDaily)
                createTickerData(allDaily, 'XOM')
            })
        getDailyBySymbol('WMT')
            .then(allDaily => {
                setWMTDaily(allDaily)
                createTickerData(allDaily, 'WMT')
            })
        getDailyBySymbol('NVDA')
            .then(allDaily => {
                setNVDADaily(allDaily)
                createTickerData(allDaily, 'NVDA')                
            })
        getDailyBySymbol('META')
            .then(allDaily => {
                setMETADaily(allDaily)
                createTickerData(allDaily, 'META')
            })
    }, [])

    const createTickerData = (loadedData, label) => {
        let tickerDays = loadedData.slice(-2)
        let todaysValue = tickerDays[1].y
        let yesterdaysValue = tickerDays[0].y
        let differenceFromDayBefore = (todaysValue - yesterdaysValue)
        let differencePercentage = (differenceFromDayBefore - todaysValue)/todaysValue
        const tickerObject = {
            key: label,
            value: todaysValue.toFixed(2),
            percentage: differencePercentage.toFixed(2)
        }
        const temp = ticker.map(s=>s)
        console.log(temp);
        temp.push(tickerObject)
        setTicker(temp)
        console.log(ticker);

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
        META={METADaily} />
    </>
   )
}

export default StocksInfoContainer

