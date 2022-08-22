import React from 'react';
import styled from 'styled-components'


const SharesItem = ({IBM, TSLA, AAPL, GOOGL, AMZN}) => {
    const IBMArray = []
    const TSLAArray = []
    const AAPLArray = []
    const GOOGLArray = []
    const AMZNArray = []

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
        {IBMArray[0] > IBMArray[1] ? <li>IBM: {IBMArray[0]} 📈 <button>Add to Portfolio</button></li>  : <li>IBM: {IBMArray[0]} 📉 <button>Add to Portfolio</button></li>}
        {TSLAArray[0] > TSLAArray[1] ? <li>TSLA: {TSLAArray[0]} 📈 <button>Add to Portfolio</button></li>  : <li>TSLA: {TSLAArray[0]} 📉 <button>Add to Portfolio</button></li>}
        {AAPLArray[0] > AAPLArray[1] ? <li>AAPL: {AAPLArray[0]} 📈 <button>Add to Portfolio</button></li>  : <li>AAPL: {AAPLArray[0]} 📉 <button>Add to Portfolio</button></li>}
        {GOOGLArray[0] > GOOGLArray[1] ? <li>GOOGL: {GOOGLArray[0]} 📈 <button>Add to Portfolio</button></li>  : <li>GOOGL: {GOOGLArray[0]} 📉 <button>Add to Portfolio</button></li>}
        {AMZNArray[0] > AMZNArray[1] ? <li>AMZN: {AMZNArray[0]} 📈 <button>Add to Portfolio</button></li>  : <li>AMZN: {AMZNArray[0]} 📉 <button>Add to Portfolio</button></li>}
    </SharesDisplay>
  )
}

const SharesDisplay = styled.ul`
list-style-type: none;
`


export default SharesItem