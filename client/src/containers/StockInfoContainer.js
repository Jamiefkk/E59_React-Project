import { useEffect, useState } from "react"
import { getDailyBySymbol } from "../services/StockServices"
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const StockInfoContainer = () => {
    
    const [IBMDaily, setIBMDaily] = useState([])
    const [AAPLDaily, setAAPLDaily] = useState([])
    const [MSFTDaily, setMSFTDaily] = useState([])
    const [TSLADaily, setTSLADaily] = useState([])
    const [XOMDaily, setXOMDaily] = useState([])

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
    }, [])
    
    const options = {
        title: {
            text: 'My stock chart'
            },
        series: [
        {
            data: IBMDaily,
            name: 'IBM'
        },
        {
            data: AAPLDaily,
            name: 'AAPL'
        },
        {
            data: MSFTDaily,
            name: 'MSFT'
        },
        {
            data: TSLADaily,
            name: 'TSLA'
        },
        {
            data: XOMDaily,
            name: 'XOM'
        },
    ]
    };

    return (
        <HighchartsReact 
            highcharts={Highcharts} 
            constructorType={'stockChart'}
            options={options}
            />
    )
}

export default StockInfoContainer