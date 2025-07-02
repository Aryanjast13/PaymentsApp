import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./Button";

export const Users = () => {
  // Replace with backend call
  const [users, setUsers] = useState([]);
  const [filter,setFilter] =useState("")
    
  const fetchUser = async () => {
    try {
        const res = await axios.get(`http://localhost:3800/api/v1/user/bulk?filter=${filter}`);
        setUsers(res.data.User);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};
  
    
        useEffect(() => {
          const delayDebounce = setTimeout(() => {
            if (filter !== '') {
                fetchUser();
            }
          }, 500); // delay of 500ms
          
        

        return () => clearTimeout(delayDebounce);

        }, [filter]);
  
  useEffect(() => {
    fetchUser()
  },[])
  

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          onChange={(e)=>setFilter(e.target.value)}
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {users?.map((user,i) => (
          <User user={user} key={i} />
        ))}
      </div>
    </>
  );
};

function User({ user, i }) {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center pb-3 px-2  border-b border-b-gray-800 rounded-lg hover:bg-gray-800" key={i}>
      <div className="flex pt-2">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl text-gray-800 font-semibold">
            {user.firstName[0].toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful mt-3">
        <Button label={"Send Money"} onClick={()=> navigate("/sendMoney?id=" +user._id+"&name="+user.firstName)} />
      </div>
    </div>
  );
}
