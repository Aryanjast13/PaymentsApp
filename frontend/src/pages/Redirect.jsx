import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

const Redirect = () => {
   
    const navigate = useNavigate();
    

    const redirect = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/signin")
        }
        else {
            navigate("/dashboard")
        }
    }

    useEffect(() => {
        redirect()
    },[])

  return (
    <div>Redirect</div>
  )
}

export default Redirect