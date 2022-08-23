import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const StockChart = ({IBM, AAPL, MSFT, TSLA, XOM, WMT, NVDA, META, comparePercent}) => {
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
        plotOptions: null,
        series: [
        {
            data: IBM,
            name: 'IBM',

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
        {
            data: NVDA,
            name: 'NVDA'
        },
        {
            data: META,
            name: 'META'
        },
        {
            data: WMT,
            name: 'WMT'
        },
        ]
    };

    comparePercent ? options.plotOptions = {series: {compare: 'percent'}} : options.plotOptions = {series: {compare: 'value'}}

    return (
        <HighchartsReact 
            highcharts={Highcharts} 
            constructorType={'stockChart'}
            options={options}
            />
    )
}

export default StockChart