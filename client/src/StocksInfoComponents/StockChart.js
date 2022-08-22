import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const StockChart = ({IBM, AAPL, MSFT, TSLA, XOM, WMT, NVDA, META}) => {
    const options = {
        title: {
            text: 'Stock Chart'
            },
        scrollbar: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        legend: {
            enabled: true,
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'middle',
        },
        series: [
        {
            data: IBM,
            name: 'IBM',
            compare: 'percent'
        },
        {
            data: AAPL,
            name: 'AAPL',
            compare: 'percent'
        },
        {
            data: MSFT,
            name: 'MSFT',
            compare: 'percent'
        },
        {
            data: TSLA,
            name: 'TSLA',
            compare: 'percent'
        },
        {
            data: XOM,
            name: 'XOM',
            compare: 'percent'
        },
        {
            data: NVDA,
            name: 'NVDA',
            compare: 'percent'
        },
        {
            data: META,
            name: 'META',
            compare: 'percent'
        },
        {
            data: WMT,
            name: 'WMT',
            compare: 'percent'
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