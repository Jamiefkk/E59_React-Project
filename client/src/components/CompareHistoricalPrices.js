import React from 'react'
import StockObjectItem from './StockObjectItem'

const CompareHistoricalPrices = ({IBM, AAPL, MSFT, TSLA, XOM, WMT, NVDA, META}) => {

    // const [budget, setBudget] = useState[null]
    const selectDropdown = (stock) => {
        let name = String(stock)
        stock.map((stockObject, index)=> {
            return <StockObjectItem key={index}
            name={name}
            date={stockObject.x}
            value={stockObject.y}
        />

        })
    }

  return (
    <>
    {selectDropdown(IBM)}
    </>
  )
}

export default CompareHistoricalPrices