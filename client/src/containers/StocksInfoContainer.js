import { useEffect, useState } from "react"
import { getDailyBySymbol } from "../services/StockServices"
import styled from "styled-components"
import StockChart from "../StocksInfoComponents/StockChart"
import SwitchYButton from "../StocksInfoComponents/SwitchYButton"



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

    }, [])


    const flipComparePercent = () => {
        setComparePercent(!comparePercent);
    }

    
   return(
    <>
    <Wrapper>
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
`

export default StocksInfoContainer

