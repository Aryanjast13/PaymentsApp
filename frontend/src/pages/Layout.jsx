import { useEffect } from "react";
import { useNavigate } from "react-router";

const Layout = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) navigate("/signin") 
      },[])

    return <>{children}</>
}

export default Layout;