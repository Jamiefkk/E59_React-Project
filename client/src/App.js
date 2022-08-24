import './App.css';
import StocksPortfolioContainer from './containers/StocksPortfolioContainer';
import StocksInfoContainer from './containers/StocksInfoContainer';
import styled from 'styled-components';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <Wrapper>
      <HeaderContainer/>
      <StocksPortfolioContainer/>
      <br></br>
      <StocksInfoContainer/>
    </Wrapper>
  );
}
const Wrapper = styled.header`
    background-color: #f5f0da;
    padding-bottom: 3rem;
    height: 100%;
    min-height: 100vh;
`

export default App;
