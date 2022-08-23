import React from 'react';
import styled from 'styled-components'

import { updateUser } from '../services/UsersService';


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
        console.log('selectedUser: ', selectedUser);
        const stockToAdd = {
            key: event.target.name,
            purchaseValue: parseFloat(event.target.value),
            date: Date.now(),
        }
        selectedUser.portfolio.push(stockToAdd)
        updateUser(stockToAdd)
        addToPortfolio(stockToAdd)
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
        <li>IBM: ${IBMArray[0]} {(IBMArray[0] > IBMArray[1]) ? <>📈</> : <>📉</>} <button name='IBM' value={IBMArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>TSLA: ${TSLAArray[0]} {(TSLAArray[0] > TSLAArray[1]) ? <>📈</> : <>📉</>} <button name='TSLA' value={TSLAArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>AAPL: ${AAPLArray[0]} {(AAPLArray[0] > AAPLArray[1]) ? <>📈</> : <>📉</>} <button name='AAPL' value={AAPLArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>MSFT: ${MSFTArray[0]} {(MSFTArray[0] > MSFTArray[1]) ? <>📈</> : <>📉</>} <button name='MSFT' value={MSFTArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>META: ${METAArray[0]} {(METAArray[0] > METAArray[1]) ? <>📈</> : <>📉</>} <button name='META' value={METAArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>NVDA: ${NVDAArray[0]} {(NVDAArray[0] > NVDAArray[1]) ? <>📈</> : <>📉</>} <button name='NVDA' value={NVDAArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>WMT: ${WMTArray[0]} {(WMTArray[0] > WMTArray[1]) ? <>📈</> : <>📉</>} <button name='WMT' value={WMTArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>XOM: ${XOMArray[0]} {(XOMArray[0] > XOMArray[1]) ? <>📈</> : <>📉</>} <button name='XOM' value={XOMArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        
    </SharesDisplay>
  )
}

const SharesDisplay = styled.ul`
list-style-type: none;
`


export default StocksItem