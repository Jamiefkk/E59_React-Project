import logo from './logo.svg';
import './App.css';
import StocksPortfolioContainer from './containers/StocksPortfolioContainer';
import StocksInfoContainer from './containers/StocksInfoContainer';

function App() {
  return (
    <>
      <StocksInfoContainer/>
      <StocksPortfolioContainer/>
    </>
  );
}

export default App;
