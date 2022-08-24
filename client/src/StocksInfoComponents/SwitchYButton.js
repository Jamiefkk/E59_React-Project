import styled from "styled-components"

const SwitchYButton = ({flipComparePercent}) => {
    
    const onClick = () => {
        flipComparePercent()
    }
    
    return (
        <Wrapper>
            <Text>Y-axis</Text>
            <Button onClick={onClick}>$/%</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 54px;
    left: 350px;
    display: flex;
    align-items: center;
`

const Text = styled.span`
    color: rgb(102, 102, 102); 
    fill: rgb(102, 102, 102);
    margin-right: 5px;
    font-size: 12px;
    font-family: "Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif;
`

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

export default SwitchYButton;