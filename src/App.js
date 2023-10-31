
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences'
import Aadhar from './components/Aadhar/Aadhar';
import useToken from './useToken';
import CertVer from './components/Verify/Verify';
import GenCert from './components/Generate/Generate';

import LoginSignUp from './components/LoginSignUp';
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup';
import ContractCreation from './components/ContractCreation/ContractCreation';

import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import BuyerDashboard from './components/BuyerDashboard/BuyerDashboard';

import AddProperty from './components/Dashboard/AddProperty/index.js';
import EKyc from './components/EKyc/EKyc';
import { createContext } from 'react';
import BuyProperty from './components/BuyProperty';
import SellerContract from './components/SellerContract';
import UpdateDocs from './components/UpdateDocument';
import Testing from './components/test';
function App() {

  const MyContext = createContext();


  const { token, setToken } = useToken();
  const { removeToken } = useToken();
  // <Login setToken={setToken} />
  // const allValues = getAllLocalStorageValues();
  // console.log(allValues);
  // if (!token) {
  //   // return <Login setToken={setToken} />
  //   return <LoginSignUp />
  // }
//   const date = new Date();
//   const refDate = new Date("2020-01-01");
//   const secpassed = Math.floor((date - refDate) / 1000);
//   const showTime=date.getMinutes()*60 + date.getSeconds()+date.getHours()*60*60+secpassed;
//   if(token && showTime-token>2 ){
//     console.log(showTime +" : "+token)
//     localStorage.clear()
// }

  return (
      <BrowserRouter>
        <>
          {!token && (
            <Routes>
              <Route path="/" element={<LoginSignUp />} />
              <Route path="/login" element={<Login setToken={setToken} />} />
              <Route path="/signup" element={<SignUp setToken={setToken} />} />
              <Route path="*" element={<LoginSignUp />} />
              <Route path="/aadhar" element={<Aadhar />} />
              <Route path="/ContractCreation" element={<ContractCreation />} />
              <Route path="/Testing" element={<Testing />} />
              <Route path="/ekyc" element={<EKyc />} />
            </Routes>
          )}
          {token && (
            <>
              <div className="flex flex-col items-center justify-center h-full w-full">
                <Routes>
                  <Route path="/d" element={<Dashboard />} />
                  <Route path="/d/update" element={<UpdateDocs />} />
                  <Route path="/d/ap" element={<AddProperty />} />
                  <Route path="/p" element={<Preferences />} />
                  <Route path="/v" element={<CertVer />} />
                  <Route path="/g" element={<GenCert />} />
                  <Route path="/a" element={<AdminDashboard />} />
                  <Route path="/b" element={<BuyerDashboard />} />
                  <Route path="/b/buy" element={<BuyProperty />} />
                  <Route path="/sellerContract" element={<SellerContract />} />
                  <Route path="/Testing" element={<Testing />} />
                </Routes>
                <div className='flex flex-row justify-end w-full p-4'>
                  <button
                    onClick={() => {
                      window.location.reload();
                      removeToken();
                    }}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      </BrowserRouter>
  );
}

export default App;

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }