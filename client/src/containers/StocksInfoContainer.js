import { useEffect, useState } from "react"
import { getDailyBySymbol } from "../services/StockServices"
import styled from "styled-components"
import StockChart from "../StocksInfoComponents/StockChart"
import SwitchYButton from "../StocksInfoComponents/SwitchYButton"
import { ALL_SYMBOLS } from "../services/TickerService"



const StocksInfoContainer = () => {

    const [comparePercent, setComparePercent] = useState(true)

    const [dailyStockInfo, setDailyStockInfo] = useState([])
    
    // const [IBMDaily, setIBMDaily] = useState([])
    // const [AAPLDaily, setAAPLDaily] = useState([])
    // const [MSFTDaily, setMSFTDaily] = useState([])
    // const [TSLADaily, setTSLADaily] = useState([])
    // const [XOMDaily, setXOMDaily] = useState([])
    // const [WMTDaily, setWMTDaily] = useState([])
    // const [NVDADaily, setNVDADaily] = useState([])
    // const [METADaily, setMETADaily] = useState([])


    useEffect( () => {

        const stockInfoPromises = ALL_SYMBOLS.map((symbol => {
            return getDailyBySymbol(symbol)
        }))

        Promise.all(stockInfoPromises).then(data => setDailyStockInfo(data))

        // getDailyBySymbol('IBM')
        //     .then(allDaily => {
        //         setIBMDaily(allDaily)
        //     })
        // getDailyBySymbol('AAPL')
        //     .then(allDaily => {
        //         setAAPLDaily(allDaily)
        //     })
        // getDailyBySymbol('MSFT')
        //     .then(allDaily => {
        //         setMSFTDaily(allDaily)         
        //     })
        // getDailyBySymbol('TSLA')
        //     .then(allDaily => {
        //         setTSLADaily(allDaily)         
        //     })
        // getDailyBySymbol('XOM')
        //     .then(allDaily => {
        //         setXOMDaily(allDaily)   
        //     })
        // getDailyBySymbol('WMT')
        //     .then(allDaily => {
        //         setWMTDaily(allDaily)
        //     })
        // getDailyBySymbol('NVDA')
        //     .then(allDaily => {
        //         setNVDADaily(allDaily)        
        //     })
        // getDailyBySymbol('META')
        //     .then(allDaily => {
        //         setMETADaily(allDaily)
        //     })

    }, [])


    const flipComparePercent = () => {
        setComparePercent(!comparePercent);
    }

    
   return(
    <>
    <Wrapper>
        <StockChart 
            dailyStockInfo={dailyStockInfo}
            // IBM={IBMDaily} 
            // AAPL={AAPLDaily} 
            // MSFT={MSFTDaily}
            // TSLA={TSLADaily}
            // XOM={XOMDaily}
            // WMT={WMTDaily}
            // NVDA={NVDADaily}
            // META={METADaily}
            comparePercent={comparePercent}/>
        <SwitchYButton flipComparePercent={flipComparePercent}/>
    </Wrapper>
    </>
    
   )
}


const Wrapper = styled.div`
    position: relative;
    margin: 0 3rem;
    border: grey 1px solid;
    box-shadow: 0 0 16px grey;
    background-color: #f5f0da;
`

export default StocksInfoContainer

