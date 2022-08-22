import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const StockChart = ({IBM, AAPL, MSFT, TSLA, XOM}) => {
    const options = {
        title: {
            text: 'My stock chart'
            },
        series: [
        {
            data: IBM,
            name: 'IBM'
        },
        {
            data: AAPL,
            name: 'AAPL'
        },
        {
            data: MSFT,
            name: 'MSFT'
        },
        {
            data: TSLA,
            name: 'TSLA'
        },
        {
            data: XOM,
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

export default StockChart