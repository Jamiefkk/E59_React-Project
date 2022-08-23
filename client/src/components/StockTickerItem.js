import styled from 'styled-components'

const StockTickerItem = ({name, value, percentage}) => {

    const getPercentageNode = (percentage) => {
        if (percentage > 2.5) {
            console.log(percentage);
            console.log("VP");
            return <PercentageVeryPositive>({percentage}%)</PercentageVeryPositive>
        } else if ( (percentage < 2.5) && (percentage > 0 ) ) {
            console.log(percentage);
            console.log("P");
            return <PercentagePositive>({percentage}%)</PercentagePositive>
        } else if (percentage === 0) {
            console.log(percentage);
            console.log("E");
            return <PercentageEqual>({percentage}%)</PercentageEqual>
        } else if ((0 > percentage) && (percentage > -2.5)) {
            console.log(percentage);
            console.log("N");
            return <PercentageNegative>({percentage}%)</PercentageNegative>
        } else if (percentage < -2.5) {
            console.log(percentage);
            console.log("VN");
            return <PercentageVeryNegative>({percentage}%)</PercentageVeryNegative>
    }
    
}
    const percentageNode = getPercentageNode(percentage)
    return(
        <Item className={percentage}>
            <Name>{name}: </Name> 
            <Value>${value} </Value> 
            {percentageNode}
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
const PercentageVeryPositive = styled.span`
    margin-right: 4px;
    color: gold;
`
const PercentagePositive = styled.span`
    margin-right: 4px;
    color: green;
`
const PercentageEqual = styled.span`
    margin-right: 4px;
    color: black;
`
const PercentageNegative = styled.span`
    margin-right: 5px;
    color: red;
`
const PercentageVeryNegative = styled.span`
    margin-right: 5px;
    color: #660000;
`

export default StockTickerItem