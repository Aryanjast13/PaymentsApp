import { useEffect, useState } from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import axiosInstance from '../lib/api'

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const fetchBalance = async () => {
    const res = await axiosInstance.get(
      "/account/balance",
    );
    setBalance(Math.floor(res.data.balance));
   
  }

  useEffect(() => {
    fetchBalance();
   },[])

  return (
    <div className='p-4 bg-gray-900  text-slate-200 h-dvh'>
      <Appbar />
      <Balance value={balance}  />
      <Users/>
    </div>
  )
}

export default Dashboard