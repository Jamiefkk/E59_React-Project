import React, {useState, useEffect} from 'react'
import './StockTicker.css';
import { getDailyBySymbol } from '../services/StockServices'


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
                setMSFTDaily(`AAPL: ${value}(${difference.toFixed(2)})`)
                
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
    <div class="hwrap"><div class="hmove">
    <div class="hitem">{IBMDaily}</div>
    <div class="hitem">{AAPLDaily}</div>
    <div class="hitem">{GOOGLDaily}</div>
    <div class="hitem">{TSLADaily}</div>
    <div class="hitem">{AMZNDaily}</div>
    <div class="hitem">{WMTDaily}</div>
    <div class="hitem">{MSFTDaily}</div>
    <div class="hitem">{METADaily}</div>
    <div class="hitem">{XOMDaily}</div>
    <div class="hitem">{NVDADaily}</div>

  </div></div>
  )

}

export default StockTicker