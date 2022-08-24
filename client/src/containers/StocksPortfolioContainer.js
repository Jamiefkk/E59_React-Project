import React, {useEffect, useState} from 'react';
import OwnedShares from '../portfoliocomponents/OwnedShares';
import Pie from '../portfoliocomponents/PieChart';
import StocksList from '../portfoliocomponents/StocksList';
import UserDetails from '../portfoliocomponents/UserDetails';
import UserSelect from '../portfoliocomponents/UserSelect';
import { getDailyBySymbol } from '../services/PortfolioService';
import { getUsers, getUsersPortfolio } from '../services/UsersService';
import styled from 'styled-components';

const StocksPortfolioContainer = () => {

    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState({})

    const [myStocks, setMyStocks] = useState([])

    const [IBMDaily, setIBMDaily] = useState([])
    const [AAPLDaily, setAAPLDaily] = useState([])
    const [MSFTDaily, setMSFTDaily] = useState([])
    const [TSLADaily, setTSLADaily] = useState([])
    const [XOMDaily, setXOMDaily] = useState([])
    const [WMTDaily, setWMTDaily] = useState([])
    const [NVDADaily, setNVDADaily] = useState([])
    const [METADaily, setMETADaily] = useState([])

    useEffect(()=>{
        getUsers().then(allUsers => setUsers(allUsers))
    }, []);

    useEffect(() => {
        if (selectedUser._id)
            getUsersPortfolio(selectedUser._id).then(portfolio => {
                console.log(portfolio);
                setMyStocks(portfolio)
            })
    }, [selectedUser])
  
    const addToPortfolio = (stock) => {
      const copyMyStocks = [...myStocks, stock]
      setMyStocks(copyMyStocks)
      const copySelectedUser = {...selectedUser}
      copySelectedUser.wallet -= stock.purchaseValue
      setSelectedUser(copySelectedUser)
    }

    const changeSelectedUser = (i) => {
        const copyUsers = [...users];
        setSelectedUser(copyUsers[i]);
    }

    useEffect(() => {
      getDailyBySymbol('IBM')
          .then(allIBMDaily => {
              const today = allIBMDaily.slice(0, 1)
              setIBMDaily(today)
          });
      getDailyBySymbol('AAPL')
          .then(allAAPLDaily => {
              const today = allAAPLDaily.slice(0, 1)
              setAAPLDaily(today)
          });
      getDailyBySymbol('TSLA')
          .then(allTSLADaily => {
              const today = allTSLADaily.slice(0, 1)
              setTSLADaily(today)
          });
      getDailyBySymbol('MSFT')
          .then(allMSFTDaily => {
              const today = allMSFTDaily.slice(0, 1)
              setMSFTDaily(today)
          })
      getDailyBySymbol('XOM')
          .then(allXOMDaily => {
              const today = allXOMDaily.slice(0, 1)
              setXOMDaily(today)
          })
      getDailyBySymbol('WMT')
          .then(allWMTDaily => {
              const today = allWMTDaily.slice(0, 1)
              setWMTDaily(today)
          })
      getDailyBySymbol('NVDA')
          .then(allNVDADaily => {
              const today = allNVDADaily.slice(0, 1)
              setNVDADaily(today)
          })
      getDailyBySymbol('META')
          .then(allMETADaily => {
              const today = allMETADaily.slice(0, 1)
              setMETADaily(today)
          })
  }, [])
  return (
    <>
        <>
            <UserSelect users={users} changeSelectedUser={changeSelectedUser}/>
            
        </>

        { 
            selectedUser._id
            ? 
            <>
            <Wrapper>
                <weeWrapper>
                <UserDetails selectedUser={selectedUser}/>
                    <OwnedShares IBM={IBMDaily} MSFT={MSFTDaily} META={METADaily} NVDA={NVDADaily} AAPL={AAPLDaily} WMT={WMTDaily} XOM={XOMDaily} TSLA={TSLADaily} myStocks={myStocks}/>
                </weeWrapper>
                <Pie myStocks={myStocks}/>
                <StocksList addToPortfolio={addToPortfolio} selectedUser={selectedUser}/>
            </Wrapper>
            </> 
            :
            null
        }
    </>
  )
}

const Wrapper = styled.div`
    display: flex
`


export default StocksPortfolioContainer;