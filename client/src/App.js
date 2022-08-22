import logo from './logo.svg';
import './App.css';
import SharesPortfolioContainer from './containers/SharesPortfolioContainer';
import StocksInfoContainer from './containers/StocksInfoContainer';

function App() {
  return (
    <>
      <StocksInfoContainer/>
      <SharesPortfolioContainer/>
    </>
  );
}

export default App;
