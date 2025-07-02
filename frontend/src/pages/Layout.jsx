import { useEffect } from "react";
import { useNavigate } from "react-router";
import { userStore } from "../store/userStore";

const Layout = ({ children }) => {
  const {token} = userStore();
   console.log(token)
    const navigate = useNavigate();
    useEffect(() => {
        if(!token) navigate("/signin") 
      },[])

    return <>{children}</>
}

export default Layout;