import { useState } from "react";
import { useNavigate } from "react-router";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axiosInstance from "../lib/api";
import { userStore } from "../store/userStore";

export const Signin = () => {
  const {setToken} = userStore()
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <div className="bg-gray-900 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-gray-800 w-96 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox placeholder="harkirat@gmail.com" label={"Email"}onChange={(e)=>setUserName(e.target.value)} />
          <InputBox placeholder="123456" label={"Password"} onChange={(e)=>setPassword(e.target.value)} />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={async () => {
              console.log("sigin clicked");
              const res = await axiosInstance.post("/user/signin", { username, password });
              if (res.data.user) {
                setToken();
                navigate("/dashboard");
              }
            }} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
