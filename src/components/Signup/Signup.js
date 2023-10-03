import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function SignUp({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [btype, setBtype] = useState('buyer');

  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();

    console.log(username, password, name, dateOfBirth, btype);
    // const canLoginRes = await canLogin(username, password);
    // console.log(canLoginRes);

    // if (!canLoginRes || canLoginRes === false) {
    //   alert("Invalid Credentials");
    //   return;
    // }

    // const token = await loginUser(username, password);
    // setToken(token);
    // navigate('/d');
    navigate('/aadhar', { state: { username, password, name, dateOfBirth, btype } });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Please Log In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-lg">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dateOfBirth" className="text-lg">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="type" className="text-lg">
            Type
          </label>
          <select
            id="type"
            onChange={(e) => {
              setBtype(e.target.value);
            }}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

