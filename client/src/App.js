import './App.css';
import StocksPortfolioContainer from './containers/StocksPortfolioContainer';
import StocksInfoContainer from './containers/StocksInfoContainer';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Image src="FGHLogo.jpeg"></Image>
      <StocksInfoContainer/>
      <br></br>
      <StocksPortfolioContainer/>
    </Wrapper>
  );
}
const Wrapper = styled.header`
    background-color: #FAF8F0;

`
const Image = styled.img`
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;

`
export default App;
