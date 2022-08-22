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

    useEffect(() => {
        getDailyBySymbol('IBM')
            .then(allIBMDaily => {
                setIBMDaily(allIBMDaily)  
            })
        getDailyBySymbol('AAPL')
            .then(allAAPLDaily => {
                setAAPLDaily(allAAPLDaily)
                
            })
        getDailyBySymbol('MSFT')
            .then(allMSFTDaily => {
                setMSFTDaily(allMSFTDaily)
                
            })
        getDailyBySymbol('TSLA')
            .then(allTSLADaily => {
                setTSLADaily(allTSLADaily)
            })

        getDailyBySymbol('XOM')
            .then(allXOMDaily => {
                setXOMDaily(allXOMDaily)
                
            })
        getDailyBySymbol('WMT')
            .then(allWMTDaily => {
                setWMTDaily(allWMTDaily)
                
            })
        getDailyBySymbol('NVDA')
            .then(allNVDADaily => {
                setNVDADaily(allNVDADaily)
                
            })
        getDailyBySymbol('META')
            .then(allMETADaily => {
                setMETADaily(allMETADaily)
                
            })
    }, [])
    
   return(
    <>
      <StockTicker/>
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