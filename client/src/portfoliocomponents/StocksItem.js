import React from 'react';
import styled from 'styled-components'


const StocksItem = ({IBM, TSLA, AAPL, MSFT, META, NVDA, WMT, XOM, addToPortfolio, selectedUser}) => {
    const IBMArray = []
    const TSLAArray = []
    const AAPLArray = []
    const MSFTArray = []
    const METAArray = []
    const NVDAArray = []
    const WMTArray = []
    const XOMArray = []

    const handleClick = (event) => {
        const stockToAdd = {
            key: event.target.name,
            purchaseValue: parseFloat(event.target.value),
            date: Date.now(),
        }
        if (sufficientFunds(stockToAdd)) {
            addToPortfolio(stockToAdd)
        } else {
            alert("Insufficient Funds")
        }
        
    }

    const sufficientFunds = (stockToAdd) => {
        return selectedUser.wallet > stockToAdd.purchaseValue
    }

    const IBMVal = IBM.map((n) => {
        const value = n.y.toFixed(2)
        IBMArray.push(value)
        return IBMArray
    })
    const TSLAVal = TSLA.map((n) => {
        const value = n.y.toFixed(2)
        TSLAArray.push(value)
        return TSLAArray
    })
    const AAPLVal = AAPL.map((n) => {
        const value = n.y.toFixed(2)
        AAPLArray.push(value)
        return AAPLArray
    })
    const MSFTVal = MSFT.map((n) => {
        const value = n.y.toFixed(2)
        MSFTArray.push(value)
        return MSFTArray
    })
    const METAVal = META.map((n) => {
        const value = n.y.toFixed(2)
        METAArray.push(value)
        return METAArray
    })
    const NVDAVal = NVDA.map((n) => {
        const value = n.y.toFixed(2)
        NVDAArray.push(value)
        return NVDAArray
    })
    const WMTVal = WMT.map((n) => {
        const value = n.y.toFixed(2)
        WMTArray.push(value)
        return WMTArray
    })
    const XOMVal = XOM.map((n) => {
        const value = n.y.toFixed(2)
        XOMArray.push(value)
        return XOMArray
    })

  return (
   <SharesDisplay>
        <h3>Available Stocks:</h3>
        <ItemWrapper>
            <Symbol>IBM: </Symbol>
            <Price>${IBMArray[0]}</Price>
            {(IBMArray[0] > IBMArray[1]) ? <Trend>📈</Trend> : <Trend>📉</Trend>} 
            <Button name='IBM' value={IBMArray[0]} onClick={handleClick}>Buy</Button>
        </ItemWrapper>

        <ItemWrapper>
            <Symbol>TSLA:</Symbol> 
            <Price>${TSLAArray[0]}</Price> 
            {(TSLAArray[0] > TSLAArray[1]) ? <Trend>📈</Trend> : <Trend>📉</Trend>}
            <Button name='TSLA' value={TSLAArray[0]} onClick={handleClick}>Buy</Button>
        </ItemWrapper>

        <ItemWrapper>
            <Symbol>AAPL: </Symbol> 
            <Price>${AAPLArray[0]}</Price> 
            {(AAPLArray[0] > AAPLArray[1]) ? <Trend>📈</Trend> : <Trend>📉</Trend>}
            <Button name='AAPL' value={AAPLArray[0]} onClick={handleClick}>Buy</Button>
        </ItemWrapper>

        <ItemWrapper>
            <Symbol>MSFT: </Symbol> 
            <Price>${MSFTArray[0]}</Price> 
            {(MSFTArray[0] > MSFTArray[1]) ? <Trend>📈</Trend> : <Trend>📉</Trend>}
            <Button name='MSFT' value={MSFTArray[0]} onClick={handleClick}>Buy</Button>
        </ItemWrapper>

        <ItemWrapper>
            <Symbol>META: </Symbol> 
            <Price>${METAArray[0]} </Price>
            {(METAArray[0] > METAArray[1]) ? <Trend>📈</Trend> : <Trend>📉</Trend>}
            <Button name='META' value={METAArray[0]} onClick={handleClick}>Buy</Button>
        </ItemWrapper>

        <ItemWrapper>
            <Symbol>NVDA: </Symbol> 
            <Price>${NVDAArray[0]} </Price> 
            {(NVDAArray[0] > NVDAArray[1]) ? <Trend>📈</Trend> : <Trend>📉</Trend>}
            <Button name='NVDA' value={NVDAArray[0]} onClick={handleClick}>Buy</Button>
        </ItemWrapper>

        <ItemWrapper>
            <Symbol>WMT: </Symbol>
            <Price>${WMTArray[0]}</Price> 
            {(WMTArray[0] > WMTArray[1]) ? <Trend>📈</Trend> : <Trend>📉</Trend>}
            <Button name='WMT' value={WMTArray[0]} onClick={handleClick}>Buy</Button>
        </ItemWrapper>

        <ItemWrapper>
            <Symbol>XOM: </Symbol>
            <Price>${XOMArray[0]}</Price> 
            {(XOMArray[0] > XOMArray[1]) ? <Trend>📈</Trend> : <Trend>📉</Trend>}
            <Button name='XOM' value={XOMArray[0]} onClick={handleClick}>Buy</Button>
        </ItemWrapper>

    </SharesDisplay>
  )
}

const SharesDisplay = styled.ul`
    list-style-type: none;
    width: 15%;
    padding: 0;
    margin-top: 0;

`

const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Symbol = styled.b`
    width: 30%;
    text-align: right;
`

const Price = styled.span`
    width: 30%
`

const Trend = styled.span``

const Button = styled.button`
    border: none;
    font-size: 12px;
    font-family: "Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif;

    height: 22px;
    width: 32px;

    background-color: #f7f7f7;
    color: #363636;

    text-align: center;

    &:hover {
        cursor: pointer;
        background-color: #e6e6e6;
    }
`


export default StocksItem