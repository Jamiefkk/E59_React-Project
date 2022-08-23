import styled from 'styled-components'

const StockTickerItem = ({name, value, percentage}) => {
    return(
        <Item>
            {name}: ${value} ({percentage})%
        </Item>
    )
}

const Item = styled.div`
    display: flex
`

export default StockTickerItem