
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
import { createContext } from 'react';

function App() {

  const MyContext = createContext();

  const date = new Date();
  const showTime = date.getHours()
    + ':' + date.getMinutes()
    + ":" + date.getSeconds();
  const { token, setToken } = useToken();
  const { removeToken } = useToken();
  // <Login setToken={setToken} />
  // const allValues = getAllLocalStorageValues();
  // console.log(allValues);
  // if (!token) {
  //   // return <Login setToken={setToken} />
  //   return <LoginSignUp />
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
            </Routes>
          )}
          {token && (
            <>
              <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden">
                <Routes>
                  <Route path="/d" element={<Dashboard />} />
                  <Route path="/p" element={<Preferences />} />
                  <Route path="/v" element={<CertVer />} />
                  <Route path="/g" element={<GenCert />} />
                  <Route path="/a" element={<AdminDashboard />} />
                  <Route path="/b" element={<BuyerDashboard />} />

                </Routes>
                <div>
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