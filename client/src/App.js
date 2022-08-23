import './App.css';
import StocksPortfolioContainer from './containers/StocksPortfolioContainer';
import StocksInfoContainer from './containers/StocksInfoContainer';

function App() {
  return (
    <>
      <StocksInfoContainer/>
      <br></br>
      <StocksPortfolioContainer/>
    </>
  );
}

export default App;
