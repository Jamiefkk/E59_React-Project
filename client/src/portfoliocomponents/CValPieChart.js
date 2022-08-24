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
          width: 470
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
          dataLabels: {
            style: {
                fontSize: 8  
            }
        },
          colorByPoint: true,
          data: [{
            name: `TSLA $${cValUserTSLAStocks.toFixed(0)}`,
            y: cValUserTSLAStocks,
            sliced: true,
            selected: true
          }, {
            name: `IBM $${cValUserIBMStocks.toFixed(0)}`,
            y: cValUserIBMStocks
          }, {
            name: `MSFT $${cValUserMSFTStocks.toFixed(0)}`,
            y: cValUserMSFTStocks
          }, {
            name: `META $${cValUserMETAStocks.toFixed(0)}`,
            y: cValUserMETAStocks
          }, {
            name: `NVDA $${cValUserNVDAStocks.toFixed(0)}`,
            y: cValUserNVDAStocks
          }, {
            name: `WMT $${cValUserWMTStocks.toFixed(0)}`,
            y: cValUserWMTStocks
          }, {
            name: `XOM $${cValUserXOMStocks.toFixed(0)}`,
            y: cValUserXOMStocks
          }, {
            name: `AAPL $${cValUserAAPLStocks.toFixed(0)}`,
            y: cValUserAAPLStocks
          }]
        }]
      };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}

export default CValPieChart