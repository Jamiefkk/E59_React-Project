import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'



const CValPieChart = ({myStocks, IBMDaily, WMTDaily, TSLADaily, AAPLDaily, MSFTDaily, METADaily, NVDADaily, XOMDaily}) => {

  const userWMTStocks = myStocks.filter((stock) => stock.key === "WMT")
  const userIBMStocks = myStocks.filter((stock) => stock.key === "IBM")
  const userTSLAStocks = myStocks.filter((stock) => stock.key === "TSLA")
  const userAAPLStocks = myStocks.filter((stock) => stock.key === "AAPL")
  const userMSFTStocks = myStocks.filter((stock) => stock.key === "MSFT")
  const userMETAStocks = myStocks.filter((stock) => stock.key === "META")
  const userNVDAStocks = myStocks.filter((stock) => stock.key === "NVDA")
  const userXOMStocks = myStocks.filter((stock) => stock.key === "XOM")
  
  
  const cValUserWMTStocks = WMTDaily[0].y * userWMTStocks.length
  const cValUserIBMStocks = IBMDaily[0].y * userIBMStocks.length
  const cValUserTSLAStocks = TSLADaily[0].y * userTSLAStocks.length
  const cValUserAAPLStocks = AAPLDaily[0].y * userAAPLStocks.length
  const cValUserMSFTStocks = MSFTDaily[0].y * userMSFTStocks.length
  const cValUserMETAStocks = METADaily[0].y * userMETAStocks.length
  const cValUserNVDAStocks = NVDADaily[0].y * userNVDAStocks.length
  const cValUserXOMStocks = XOMDaily[0].y * userXOMStocks.length

    const options = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          height: 400,
          width: 520
        },
        title: {
          text: `Percentage of Current Portfolio Value`
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              formatter: function() {
                if (this.y > 0) {
                  return this.point.name + ': ' + Highcharts.numberFormat(this.point.percentage, 1) + ' %'
                }
              }
            }
          }
        },
        series: [{
          name: '% of Portfolio',
          colorByPoint: true,
          data: [{
            name: 'TSLA',
            y: cValUserTSLAStocks,
            sliced: true,
            selected: true
          }, {
            name: 'IBM',
            y: cValUserIBMStocks
          }, {
            name: 'MSFT',
            y: cValUserMSFTStocks
          }, {
            name: 'META',
            y: cValUserMETAStocks
          }, {
            name: 'NVDA',
            y: cValUserNVDAStocks
          }, {
            name: 'WMT',
            y: cValUserWMTStocks
          }, {
            name: 'XOM',
            y: cValUserXOMStocks
          }, {
            name: 'AAPL',
            y: cValUserAAPLStocks
          }]
        }]
      };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}

export default CValPieChart