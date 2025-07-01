import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import SendMoney from "./pages/SendMoney";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { userStore } from "./store/userStore";

function App() {
  const { setUser } = userStore();
  

  const fetchUser = async () => {
    const res = await axios.post(
      "http://localhost:3800/api/v1/user/checkAuth",{},
      {
        headers: {
          Authorization:
            "Bearer "+localStorage.getItem("token")
        },
      }
    );
    const data = res.data.user;
    console.log(data)
    const user = {
      firstname: data.firstName,
      lastname:data.lastName
    }
    setUser(user);
  }

  useEffect(() => {
   

    fetchUser()
   },[])


  return (
    <>
      <BrowserRouter>
        <Routes>
          
         
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/sendMoney" element={<Layout><SendMoney /></Layout>} />
          
          
          
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
