import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const StockChart = ({IBM, AAPL, MSFT, TSLA, XOM, WMT, NVDA, META, dailyStockInfo, comparePercent}) => {
    
    const stockSeries = dailyStockInfo.map((stockData) => {
        
        const dataArray = []

        for (const object of stockData) {
            const dataObject = {
                    x: object.x,
                    y: object.y
            }
            dataArray.push(dataObject)
        }

        const seriesObject = {
            data: dataArray,
            name: stockData[0].symbol
        }

        return seriesObject
    })

    console.log(stockSeries);


    const options = {
        title: {
            text: 'Stock Value over Time',
            style: {
                color: '#345267'
            }
            },
        chart: {
            spacing: [20, 50, 30, 50],
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
            padding: 40
        },
        // plotOptions: undefined,
        series: stockSeries
        // [{
        //     data: IBM,
        //     name: 'IBM',

        // },
        // {
        //     data: AAPL,
        //     name: 'AAPL'
        // },
        // {
        //     data: MSFT,
        //     name: 'MSFT'
        // },
        // {
        //     data: TSLA,
        //     name: 'TSLA'
        // },
        // {
        //     data: XOM,
        //     name: 'XOM'
        // },
        // {
        //     data: NVDA,
        //     name: 'NVDA'
        // },
        // {
        //     data: META,
        //     name: 'META'
        // },
        // {
        //     data: WMT,
        //     name: 'WMT'
        // },
        // ]
    };

    comparePercent ? options.plotOptions = {series: {compare: 'percent'}} : options.plotOptions = {series: {compare: undefined}}

    return (
        <HighchartsReact 
            highcharts={Highcharts} 
            constructorType={'stockChart'}
            options={options}
            />
    )
}

export default StockChart