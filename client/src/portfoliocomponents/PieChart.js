import React, { useState, useEffect } from 'react'
import { getStocks } from '../services/PortfolioService'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import PieChart from "highcharts-react-official";

const Pie = ({myStocks}) => {



    const WMTArray = []
    const IBMArray = []
    const TSLAArray = []
    const AAPLArray = []
    const MSFTArray = []
    const METAArray = []
    const NVDAArray = []
    const XOMArray = []
    const WMTVal = myStocks.filter((stock) => stock.key === "WMT")
    const IBMVal = myStocks.filter((stock) => stock.key === "IBM")
    const TSLAVal = myStocks.filter((stock) => stock.key === "TSLA")
    const AAPLVal = myStocks.filter((stock) => stock.key === "AAPL")
    const MSFTVal = myStocks.filter((stock) => stock.key === "MSFT")
    const METAVal = myStocks.filter((stock) => stock.key === "META")
    const NVDAVal = myStocks.filter((stock) => stock.key === "NVDA")
    const XOMVal = myStocks.filter((stock) => stock.key === "XOM")
    const WMTCalc = WMTVal.map ((n) => {
        WMTArray.push(n.purchaseValue)
    })
    const IBMCalc = IBMVal.map ((n) => {
        IBMArray.push(n.purchaseValue)
    })
    const TSLACalc = TSLAVal.map ((n) => {
        TSLAArray.push(n.purchaseValue)
    })
    const AAPLCalc = AAPLVal.map ((n) => {
        AAPLArray.push(n.purchaseValue)
    })
    const MSFTCalc = MSFTVal.map ((n) => {
        MSFTArray.push(n.purchaseValue)
    })
    const METACalc = METAVal.map ((n) => {
        METAArray.push(n.purchaseValue)
    })
    const NVDACalc = NVDAVal.map ((n) => {
        NVDAArray.push(n.purchaseValue)
    })
    const XOMCalc = XOMVal.map ((n) => {
        XOMArray.push(n.purchaseValue)
    })
    const initialValue = 0
    const WMTTotal = WMTArray.reduce((previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue), initialValue)
    const IBMTotal = IBMArray.reduce((previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue), initialValue)
    const TSLATotal = TSLAArray.reduce((previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue), initialValue)
    const AAPLTotal = AAPLArray.reduce((previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue), initialValue)
    const MSFTTotal = MSFTArray.reduce((previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue), initialValue)
    const METATotal = METAArray.reduce((previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue), initialValue)
    const NVDATotal = NVDAArray.reduce((previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue), initialValue)
    const XOMTotal = XOMArray.reduce((previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue), initialValue)

    const newStonks = []
    const stonks = myStocks.map((n) => {
        newStonks.push(n.purchaseValue)
    })
    const portfolioTotal = newStonks.reduce((previousValue, currentValue) => 
        parseFloat(previousValue) + parseFloat(currentValue), initialValue)

    const WMTPercentage = (WMTTotal / portfolioTotal) * 100
    const IBMPercentage = (IBMTotal / portfolioTotal) * 100
    const TSLAPercentage = (TSLATotal / portfolioTotal) * 100
    const AAPLPercentage = (AAPLTotal / portfolioTotal) * 100
    const MSFTPercentage = (MSFTTotal / portfolioTotal) * 100
    const METAPercentage = (METATotal / portfolioTotal) * 100
    const NVDAPercentage = (NVDATotal / portfolioTotal) * 100
    const XOMPercentage = (XOMTotal / portfolioTotal) * 100
    console.log(WMTPercentage);

    const options = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Percentage of Portfolio Value by Symbol'
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
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: '% of Portfolio',
          colorByPoint: true,
          data: [{
            name: 'TSLA',
            y: TSLAPercentage,
            sliced: true,
            selected: true
          }, {
            name: 'IBM',
            y: IBMPercentage
          }, {
            name: 'MSFT',
            y: MSFTPercentage
          }, {
            name: 'META',
            y: METAPercentage
          }, {
            name: 'NVDA',
            y: NVDAPercentage
          }, {
            name: 'WMT',
            y: WMTPercentage
          }, {
            name: 'XOM',
            y: XOMPercentage
          }, {
            name: 'AAPL',
            y: AAPLPercentage
          }]
        }]
      };
    

    // const totWMT = WMTVal.length
    // const totIBM = IBMVal.length
    // const totTSLA = TSLAVal.length
    // const totAAPL = AAPLVal.length
    // const totMSFT = MSFTVal.length
    // const totMETA = METAVal.length
    // const totNVDA = NVDAVal.length
    // const totXOM = XOMVal.length
    // const sharesOwned = totAAPL + totIBM + totMETA + totMSFT + totNVDA + totTSLA + totWMT + totXOM

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}

export default Pie