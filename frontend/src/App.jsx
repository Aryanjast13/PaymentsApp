import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import axiosInstance from "./lib/api";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { userStore } from "./store/userStore";

function App() {
  const { setUser,setToken ,token} = userStore();
  

  const fetchUser = async () => {
    const res = await axiosInstance.post(
      "/user/checkAuth",{},
    );22
    const data = res.data.user;
    console.log(data)
    const user = {
      firstname: data.firstName,
      lastname:data.lastName
    }
    setUser(user);
    if (res.data.token) {
      setToken()
    }
  }

  useEffect(() => {
    fetchUser()
   },[])


  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={ token?<Navigate to="/dashboard" />:<Signup />} />
          <Route path="/signin" element={ token?<Navigate to="/dashboard" />: <Signin />} />
          <Route path="/dashboard" element={token?<Dashboard />:<Navigate to="/" />} />
          <Route path="/sendMoney" element={token?<SendMoney />:<Navigate to="/" />} />
          
          
          
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
