import { userStore } from "../store/userStore";

export const Balance = ({ value }) => {
  const { user } = userStore();
  console.log(user)
  


  return (
    <div className="flex  py-5 justify-between">
      <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">Rs {value}</div>
       </div>
      <div className="font-bold text-lg">{user.firstname} {user.lastname }</div>
    </div>
  );
};
