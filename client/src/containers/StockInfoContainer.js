import { useEffect, useState } from "react"
import { getDailyBySymbol } from "../services/StockServices"
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const StockInfoContainer = () => {
    
    const [IBMDaily, setIBMDaily] = useState([])
    const [AAPLDaily, setAAPLDaily] = useState([])
    const [GOOGLDaily, setGOOGLDaily] = useState([])
    const [TSLADaily, setTSLADaily] = useState([])
    const [AMZNDaily, setAMZNDaily] = useState([])

    useEffect(() => {
        getDailyBySymbol('IBM')
            .then(allIBMDaily => {
                setIBMDaily(allIBMDaily)
                
            })
        getDailyBySymbol('AAPL')
            .then(allAAPLDaily => {
                setAAPLDaily(allAAPLDaily)
                
            })
        getDailyBySymbol('GOOGL')
            .then(allGOOGLDaily => {
                setGOOGLDaily(allGOOGLDaily)
                
            })
        getDailyBySymbol('TSLA')
            .then(allTSLADaily => {
                setTSLADaily(allTSLADaily)
                
            })
        getDailyBySymbol('AMZN')
            .then(allAMZNDaily => {
                setAMZNDaily(allAMZNDaily)
                
            })
    }, [])
    
    const options = {
        title: {
          text: 'My stock chart'
        },
        series: [
            {
            data: IBMDaily,
            name: 'IBM',
          },
          {
            data: AAPLDaily,
            name: 'AAPL',
          }
        ],
      };

    return (
        <HighchartsReact 
            highcharts={Highcharts} 
            constructorType={'stockChart'}
            options={options} />
    )
}

export default StockInfoContainer