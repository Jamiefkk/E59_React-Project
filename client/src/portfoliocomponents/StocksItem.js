import React from 'react';
import styled from 'styled-components'


const StocksItem = ({IBM, TSLA, AAPL, GOOGL, AMZN, addToPortfolio}) => {
    const IBMArray = []
    const TSLAArray = []
    const AAPLArray = []
    const GOOGLArray = []
    const AMZNArray = []

    const handleClick = (event) => {
        addToPortfolio(event.target.value)
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
    const GOOGLVal = GOOGL.map((n) => {
        const value = n.y.toFixed(2)
        GOOGLArray.push(value)
        return GOOGLArray
    })
    const AMZNVal = AMZN.map((n) => {
        const value = n.y.toFixed(2)
        AMZNArray.push(value)
        return AMZNArray
    })

  return (
    <SharesDisplay>
        <li>IBM: {IBMArray[0]} {(IBMArray[0] > IBMArray[1]) ? <>📈</> : <>📉</>} <button key={IBM} value={IBMArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>TSLA: {TSLAArray[0]} {(TSLAArray[0] > TSLAArray[1]) ? <>📈</> : <>📉</>} <button key={TSLA} value={TSLAArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>AAPL: {AAPLArray[0]} {(AAPLArray[0] > AAPLArray[1]) ? <>📈</> : <>📉</>} <button key={AAPL} value={AAPLArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>GOOGL: {GOOGLArray[0]} {(GOOGLArray[0] > GOOGLArray[1]) ? <>📈</> : <>📉</>} <button key={GOOGL} value={GOOGLArray[0]} onClick={handleClick}>Add to Portfolio</button></li>
        <li>AMZN: {AMZNArray[0]} {(AMZNArray[0] > AMZNArray[1]) ? <>📈</> : <>📉</>} <button key={AMZN} value={AMZNArray[0]} onClick={handleClick}>Add to Portfolio</button></li>

    </SharesDisplay>
  )
}

const SharesDisplay = styled.ul`
list-style-type: none;
`


export default StocksItem