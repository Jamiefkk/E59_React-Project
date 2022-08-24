import React, {useEffect, useState} from 'react';
import OwnedShares from '../portfoliocomponents/OwnedShares';
import Pie from '../portfoliocomponents/PieChart';
import CValPieChart from '../portfoliocomponents/CValPieChart';
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


        const WMTVal = myStocks.filter((stock) => stock.key === "WMT")
        const IBMVal = myStocks.filter((stock) => stock.key === "IBM")
        const TSLAVal = myStocks.filter((stock) => stock.key === "TSLA")
        const AAPLVal = myStocks.filter((stock) => stock.key === "AAPL")
        const MSFTVal = myStocks.filter((stock) => stock.key === "MSFT")
        const METAVal = myStocks.filter((stock) => stock.key === "META")
        const NVDAVal = myStocks.filter((stock) => stock.key === "NVDA")
        const XOMVal = myStocks.filter((stock) => stock.key === "XOM")
    
        const totWMT = WMTVal.length
        const totIBM = IBMVal.length
        const totTSLA = TSLAVal.length
        const totAAPL = AAPLVal.length
        const totMSFT = MSFTVal.length
        const totMETA = METAVal.length
        const totNVDA = NVDAVal.length
        const totXOM = XOMVal.length
    
        let IBMTD = 0
        const IBMT = IBMDaily.map((n) => {
            IBMTD = n.y.toFixed(2)
        })
        let WMTTD = 0
        const WMTT = WMTDaily.map((n) => {
            WMTTD = n.y.toFixed(2)
        })
        let TSLATD = 0
        const TSLAT = TSLADaily.map((n) => {
            TSLATD = n.y.toFixed(2)
        })
        let AAPLTD = 0
        const AAPLT = AAPLDaily.map((n) => {
            AAPLTD = n.y.toFixed(2)
        })
        let MSFTTD = 0
        const MSFTT = MSFTDaily.map((n) => {
            MSFTTD = n.y.toFixed(2)
        })
        let METATD = 0
        const METAT = METADaily.map((n) => {
            METATD = n.y.toFixed(2)
        })
        let NVDATD = 0
        const NVDAT = NVDADaily.map((n) => {
            NVDATD = n.y.toFixed(2)
        })
        let XOMTD = 0
        const XOMT = XOMDaily.map((n) => {
            XOMTD = n.y.toFixed(2)
        })

        const XOMCVal = XOMTD * totXOM
        const WMTCVal = WMTTD * totWMT
        const NVDACVal = NVDATD * totNVDA
        const METACVal = METATD * totMETA
        const IBMCVal = IBMTD * totIBM
        const MSFTCVal = MSFTTD * totMSFT
        const TSLACVal = TSLATD * totTSLA
        const AAPLCVal = AAPLTD * totAAPL

  const getCVal = () => {
    if (myStocks.length === 0) return
    else {
        // const WMTVal = myStocks.filter((stock) => stock.key === "WMT")
        // const IBMVal = myStocks.filter((stock) => stock.key === "IBM")
        // const TSLAVal = myStocks.filter((stock) => stock.key === "TSLA")
        // const AAPLVal = myStocks.filter((stock) => stock.key === "AAPL")
        // const MSFTVal = myStocks.filter((stock) => stock.key === "MSFT")
        // const METAVal = myStocks.filter((stock) => stock.key === "META")
        // const NVDAVal = myStocks.filter((stock) => stock.key === "NVDA")
        // const XOMVal = myStocks.filter((stock) => stock.key === "XOM")
    
        // const totWMT = WMTVal.length
        // const totIBM = IBMVal.length
        // const totTSLA = TSLAVal.length
        // const totAAPL = AAPLVal.length
        // const totMSFT = MSFTVal.length
        // const totMETA = METAVal.length
        // const totNVDA = NVDAVal.length
        // const totXOM = XOMVal.length
    
        // let IBMTD = 0
        // const IBMT = IBMDaily.map((n) => {
        //     IBMTD = n.y.toFixed(2)
        // })
        // let WMTTD = 0
        // const WMTT = WMTDaily.map((n) => {
        //     WMTTD = n.y.toFixed(2)
        // })
        // let TSLATD = 0
        // const TSLAT = TSLADaily.map((n) => {
        //     TSLATD = n.y.toFixed(2)
        // })
        // let AAPLTD = 0
        // const AAPLT = AAPLDaily.map((n) => {
        //     AAPLTD = n.y.toFixed(2)
        // })
        // let MSFTTD = 0
        // const MSFTT = MSFTDaily.map((n) => {
        //     MSFTTD = n.y.toFixed(2)
        // })
        // let METATD = 0
        // const METAT = METADaily.map((n) => {
        //     METATD = n.y.toFixed(2)
        // })
        // let NVDATD = 0
        // const NVDAT = NVDADaily.map((n) => {
        //     NVDATD = n.y.toFixed(2)
        // })
        // let XOMTD = 0
        // const XOMT = XOMDaily.map((n) => {
        //     XOMTD = n.y.toFixed(2)
        // })
    
        const cVal = (WMTCVal + (IBMCVal) + (TSLACVal) + (AAPLCVal) + (MSFTCVal) + (METACVal) + (NVDACVal) + (XOMCVal))


        return cVal
    }
}















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
                  <OwnedShares getCVal={getCVal} myStocks={myStocks}/>
                </weeWrapper>
                <Pie myStocks={myStocks}/>
                <CValPieChart AAPLCVal={AAPLCVal} TSLACVal={TSLACVal} IBMCVal={IBMCVal} MSFTCVal={MSFTCVal} METACVal={METACVal} NVDACVal={NVDACVal} WMTCVal={WMTCVal} XOMCVal={XOMCVal}/>
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