import React, {useState, useEffect} from 'react'
import './StockTicker.css';
import { getDailyBySymbol } from '../services/StockServices'


const StockTicker = () => {

    
    const [IBMDaily, setIBMDaily] = useState("")
    const [AAPLDaily, setAAPLDaily] = useState("")
    const [GOOGLDaily, setGOOGLDaily] = useState("")
    const [TSLADaily, setTSLADaily] = useState("")
    const [AMZNDaily, setAMZNDaily] = useState("")

    useEffect(() => {
        getDailyBySymbol('IBM')
            .then(allIBMDaily => {
                const today = allIBMDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setIBMDaily(`IBM: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('AAPL')
            .then(allAAPLDaily => {
                const today = allAAPLDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setAAPLDaily(`AAPL: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('GOOGL')
            .then(allGOOGLDaily => {
                const today = allGOOGLDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setGOOGLDaily(`GOOGL: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('TSLA')
            .then(allTSLADaily => {
                const today = allTSLADaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setTSLADaily(`TSLA: ${value}(${difference.toFixed(2)})`)
                
            })
        getDailyBySymbol('AMZN')
            .then(allAMZNDaily => {
                const today = allAMZNDaily.slice(0, 2)
                let value = today[0].y
                let difference = today[0].y - today[1].y
                setAMZNDaily(`AMZN: ${value}(${difference.toFixed(2)})`)
                
            })
    }, [])


 return (
    <div class="hwrap"><div class="hmove">
    <div class="hitem">{IBMDaily}</div>
    <div class="hitem">{AAPLDaily}</div>
    <div class="hitem">{GOOGLDaily}</div>
    <div class="hitem">{TSLADaily}</div>
    <div class="hitem">{AMZNDaily}</div>

  </div></div>
  )

}

export default StockTicker