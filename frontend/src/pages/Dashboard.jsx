import React, { useEffect, useState } from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import axios from 'axios'

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const fetchBalance = async () => {
    const res = await axios.get(
      "http://localhost:3800/api/v1/account/balance",
      {
        headers: {
          authorization:
            "Bearer "+localStorage.getItem("token")
        },
      }
    );
    setBalance(Math.floor(res.data.balance));
   
  }

  useEffect(() => {
    fetchBalance();
   },[])

  return (
    <div className='p-4 bg-gray-900  text-slate-200 h-dvh'>
      <Appbar />
      <Balance value={balance} />
      <Users/>
    </div>
  )
}

export default Dashboard