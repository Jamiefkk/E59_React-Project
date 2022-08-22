import React, {useState, useEffect} from 'react'
import './StockTicker.css';
import { getDailyBySymbol } from '../services/StockServices'
import styled from 'styled-components'


const StockTicker = () => {

    
    const [IBMDaily, setIBMDaily] = useState("")
    const [AAPLDaily, setAAPLDaily] = useState("")
    const [GOOGLDaily, setGOOGLDaily] = useState("")
    const [TSLADaily, setTSLADaily] = useState("")
    const [AMZNDaily, setAMZNDaily] = useState("")
    const [WMTDaily, setWMTDaily] = useState("")
    const [MSFTDaily, setMSFTDaily] = useState("")
    const [XOMDaily, setXOMDaily] = useState("")
    const [NVDADaily, setNVDADaily] = useState("")
    const [METADaily, setMETADaily] = useState("")

    useEffect(() => {
        getDailyBySymbol('IBM')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setIBMDaily(`IBM: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('AAPL')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setAAPLDaily(`AAPL: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('GOOGL')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setGOOGLDaily(`GOOGL: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('TSLA')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setTSLADaily(`TSLA: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('AMZN')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setAMZNDaily(`AMZN: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('XOM')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setXOMDaily(`XOM: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('MSFT')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setMSFTDaily(`MSFT: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('NVDA')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setNVDADaily(`NVDA: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('WMT')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setWMTDaily(`WMT: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('META')
            .then(allDaily => {
                const today = allDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setMETADaily(`META: ${value}(${difference.toFixed(2)})`)
                
            })
    }, [])


 return (
    <Wrapper>
        <ScrollBar>
            <TickerItem>{IBMDaily}</TickerItem>
            <TickerItem>{AAPLDaily}</TickerItem>
            <TickerItem>{GOOGLDaily}</TickerItem>
            <TickerItem>{TSLADaily}</TickerItem>
            <TickerItem>{AMZNDaily}</TickerItem>
            <TickerItem>{WMTDaily}</TickerItem>
            <TickerItem>{MSFTDaily}</TickerItem>
            <TickerItem>{METADaily}</TickerItem>
            <TickerItem>{XOMDaily}</TickerItem>
            <TickerItem>{NVDADaily}</TickerItem>
        </ScrollBar>
    </Wrapper>
  )

}

const Wrapper = styled.div`
    overflow: hidden; /* HIDE SCROLL BAR */
    background: rgb(255, 255, 255);
`

const ScrollBar = styled.div`
    display: inline-flex;
    animation: tickerh linear 45s infinite;

    @keyframes tickerh {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
    }

    &:hover {
        animation-play-state: paused; 
    }
`

const TickerItem = styled.div`
    flex-shrink: 0;
    width: 200px;
    box-sizing: border-box;
    padding: 10px;
    margin-right: 15px;
    text-align: center;

    
`

export default StockTicker