import { useNavigate } from "react-router";
import axiosInstance from "../lib/api";
import { userStore } from "../store/userStore";

export const Appbar = () => {
  const { setTokenFalse } = userStore();
  const navigate=useNavigate()
  return (
    <div className="shadow border-b border-b-gray-800 pb-2  h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4 font-bold text-xl">PayFlow</div>
      <div className="flex gap-2">
        <button className=" bg-gray-700 hover:bg-gray-800 rounded-xl px-4 my-2" onClick={ async() => {
          const res = await axiosInstance.post("/user/logout", {});
          if (!res.data.token) {
            setTokenFalse();
            navigate("/signin");
          }
        }
        }>Lotgout</button>
        <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-gray-800 text-xl">U</div>
        </div>
      </div>
    </div>
  );
};
