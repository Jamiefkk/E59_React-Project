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
    background-color: #FAF8F0;

`

export default App;
