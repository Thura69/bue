import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Fuel from './pages/Fuel'
import Daily from './pages/Daily'
import Balance from './pages/Balance'
import Sale from './pages/Sales'
import LoginStore from './redux/stores/LoginStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Saleinvoice from './pages/Admin/Saleinvoice'
import AdminPanel from './pages/Admin/AdminPanel'
import FuelDataInput from './pages/DataInput/FuelData.input'
import DailySaleInput from './pages/DataInput/DailySale.input'
import BalanceInput from './pages/DataInput/Balance.input'
import SaleInput from './pages/DataInput/Sale.input'
import Instock from './pages/Instock'
import { Connector } from 'mqtt-react-hooks';



function App() {
  let persistor = persistStore(LoginStore);

  return (
    <Provider store={LoginStore}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Connector brokerUrl='wss://lmo-12:Asdffdsa-4580@f98a3730d6c3454b8cbf7d6c4f13cb69.s1.eu.hivemq.cloud:8884/mqtt'>
            
             <Header />
      <Routes>
        <Route path='/' element={<Login/>}></Route> 
        <Route path='/home' element={<Home />}></Route>
        <Route path='/fuelinreport' element={<Fuel />}></Route>
        <Route path='/dailysalereport' element={<Daily />}></Route>
        <Route path='/fuelbalancereport' element={<Balance/>}></Route>
        <Route path='/salesummeryreport' element={<Sale />}></Route>
        <Route path='/saleinvoicereport' element={<Saleinvoice />}></Route>
        <Route path='/adminpanel' element={<AdminPanel/>}></Route>
        <Route path='/fueldatainput' element={<FuelDataInput />}></Route>
        <Route path='/dailysaleinput' element={<DailySaleInput/>}></Route>
        <Route path='/balanceinput' element={<BalanceInput/>}></Route>
        <Route path='/saleinput' element={<SaleInput />}></Route>
        <Route path='/instock' element={<Instock/>}></Route>
      </Routes>
      <Footer/>    
            </Connector>
         
    </BrowserRouter>
      </PersistGate>
       
   </Provider>
  )
}

export default App