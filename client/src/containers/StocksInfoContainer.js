import { useEffect, useState } from "react"
import { getDailyBySymbol } from "../services/StockServices"
import styled from "styled-components"
import StockChart from "../StocksInfoComponents/StockChart"
import SwitchYButton from "../StocksInfoComponents/SwitchYButton"
import { ALL_SYMBOLS } from "../services/StockServices"



const StocksInfoContainer = () => {

    const [comparePercent, setComparePercent] = useState(true)

    const [dailyStockInfo, setDailyStockInfo] = useState([])

    useEffect( () => {

        const stockInfoPromises = ALL_SYMBOLS.map((symbol => {
            return getDailyBySymbol(symbol)
        }))

        Promise.all(stockInfoPromises).then(data => setDailyStockInfo(data))

    }, [])


    const flipComparePercent = () => {
        setComparePercent(!comparePercent);
    }

    
   return(
    <>
    <Wrapper>
        <StockChart 
            dailyStockInfo={dailyStockInfo}
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

