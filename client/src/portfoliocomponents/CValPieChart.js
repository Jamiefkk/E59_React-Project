import React, { useState, useEffect } from 'react'
import { getStocks } from '../services/PortfolioService'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import PieChart from "highcharts-react-official";

const CValPieChart = ({XOMCVal, WMTCVal, NVDACVal, METACVal, IBMCVal, MSFTCVal, TSLACVal, AAPLCVal}) => {

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
          text: 'Percentage of Current Portfolio Value by Symbol'
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
            y: TSLACVal,
            sliced: true,
            selected: true
          }, {
            name: 'IBM',
            y: IBMCVal
          }, {
            name: 'MSFT',
            y: MSFTCVal
          }, {
            name: 'META',
            y: METACVal
          }, {
            name: 'NVDA',
            y: NVDACVal
          }, {
            name: 'WMT',
            y: WMTCVal
          }, {
            name: 'XOM',
            y: XOMCVal
          }, {
            name: 'AAPL',
            y: AAPLCVal
          }]
        }]
      };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}

export default CValPieChart