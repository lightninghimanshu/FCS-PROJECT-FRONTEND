import React from 'react';
import { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

export default function BuyerDashboard() {

  const location = useLocation();
  const navigate = useNavigate();

  const {btype } = location.state;

  const [file, setFile] = useState(null);
  const [propId, setPropId] = useState(null);
  const [propAddress, setPropAddress] = useState(null);

  useEffect(() => {
    if (btype !== 'buyer') {
      navigate('/login');
    }
  }, [navigate]);

  const getAllproperties = async () => {
    let id = 42;
    const response = await fetch('https://192.168.2.241:8081/getAllProperties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    console.log(response);
    const data = await response.json();
    console.log(JSON.stringify(data));
    setFile(data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <button
        onClick={() => navigate('/v')}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >Verify Certificate</button>
      <h2 className="text-2xl font-bold mb-4">BuyerDashboard</h2>
      <button
        onClick={() => getAllproperties()}
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
      >
        Get All Properties
      </button>
      <div>
        {file && (
          <>
            <div className="mt-4 space-y-2 overflow-y-scroll h-96">
              {file.map((item) => (
                <div key={item.property_id} className="border p-2 rounded-md">
                  {Object.keys(item).map((key) => (
                    <p key={key}>
                      {key}: {item[key]}
                    </p>
                  ))}
                </div>
              ))}
            </div>

          </>
        )}
      </div>
    </div>

  );
}