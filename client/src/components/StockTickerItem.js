import styled from 'styled-components'

const StockTickerItem = ({name, value, percentage}) => {
    return(
        <Item className={percentage}>
            <Name>{name}: </Name> 
            <Value>${value} </Value> 
            { (percentage > 0) ? <PercentagePositive>({percentage}%)</PercentagePositive>: 
            <PercentageNegative>({percentage}%)</PercentageNegative>}
        </Item>
    )
}

const Item = styled.div`
    display: flex;
    margin-right: 10px 
`

const Name = styled.b`
    margin-right: 5px 

`
const Value = styled.span`
    margin-right: 5px 

`
const PercentagePositive = styled.span`
    margin-right: 5px;
    color: green;

`
const PercentageNegative = styled.span`
    margin-right: 5px;
    color: red;

`

export default StockTickerItem