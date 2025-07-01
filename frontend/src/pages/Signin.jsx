import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  const [username, setUserName] = useState("rahul@gmail.com");
  const [password, setPassword] = useState("Rahul@123");
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
              const res = await axios.post("http://localhost:3800/api/v1/user/signin", { username, password });
              localStorage.setItem("token", res.data.token)
              navigate("/dashboard");
            }} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
