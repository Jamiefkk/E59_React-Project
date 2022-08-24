import React, {useEffect, useState} from 'react';
import OwnedShares from '../portfoliocomponents/OwnedShares';
import Pie from '../portfoliocomponents/PieChart';
import CValPieChart from '../portfoliocomponents/CValPieChart';
import StocksList from '../portfoliocomponents/StocksList';
import UserDetails from '../portfoliocomponents/UserDetails';
import UserSelect from '../portfoliocomponents/UserSelect';
import { getDailyBySymbol } from '../services/UsersService';
import { getUsers, getUsersPortfolio, updateUser } from '../services/UsersService';
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

        if (selectedUser._id)
            getUsersPortfolio(selectedUser._id).then(portfolio => {
                setMyStocks(portfolio)
            })
    }, [selectedUser]);
  
    const addToPortfolio = (stockToAdd) => {
        const copySelectedUser = {...selectedUser}
        copySelectedUser.portfolio.push(stockToAdd)
        copySelectedUser.wallet -= stockToAdd.purchaseValue
        
        setSelectedUser(copySelectedUser)
        updateUser(copySelectedUser)
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
            <SelectWrapper>
                <UserSelect users={users} changeSelectedUser={changeSelectedUser}/>
            </SelectWrapper>
        </>
        { 
            selectedUser._id
            ? 
            <>
            <Wrapper>
                <WeeWrapper>
                  <UserDetails selectedUser={selectedUser}/>
                  <OwnedShares myStocks={myStocks} IBMDaily={IBMDaily} WMTDaily={WMTDaily} TSLADaily ={TSLADaily} AAPLDaily={AAPLDaily} MSFTDaily={MSFTDaily} METADaily={METADaily} NVDADaily={NVDADaily} XOMDaily={XOMDaily}/>
                </WeeWrapper>
                <PieWrapper>
                <Pie myStocks={myStocks}/>
                </PieWrapper>
                <CValPieChart myStocks={myStocks} IBMDaily={IBMDaily} WMTDaily={WMTDaily} TSLADaily ={TSLADaily} AAPLDaily={AAPLDaily} MSFTDaily={MSFTDaily} METADaily={METADaily} NVDADaily={NVDADaily} XOMDaily={XOMDaily}/>
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
    display: flex;
    margin: 1rem 3rem;
    border: grey 1px solid;
    box-shadow: 0 0 16px grey;
    justify-content: space-between;
    padding: 8px 16px;
    background: white;
`
const PieWrapper = styled.div`
    padding: 0 15px 0 0
`
const WeeWrapper = styled.div`
    padding-left: 10px
`
const SelectWrapper = styled.div`
    padding-left: 10px
`




export default StocksPortfolioContainer;