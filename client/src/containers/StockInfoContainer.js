import { useEffect, useState } from "react"
import { getDailyBySymbol } from "../services/StockServices"

const StockInfoContainer = () => {
    
    const [IBMDaily, setIBMDaily] = useState([])

    useEffect(() => {
        getDailyBySymbol('IBM')
            .then(allIBMDaily => setIBMDaily(allIBMDaily))
    })
    
    return (
        <h1>StockInfoContainer</h1>
    )
}

export default StockInfoContainer