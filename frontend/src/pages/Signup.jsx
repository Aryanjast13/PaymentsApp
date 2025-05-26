import { useEffect, useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()


  const postData = async () => {
    
    const res = await axios.post("http://localhost:3800/api/v1/user/signup", {
      firstName,
      lastName,
      username,
      password
    });                                                                 
    console.log(res);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  }

  return (
    <div className="bg-gray-900 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-gray-800 w-96 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder="John"
            label={"First Name"}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            placeholder="Doe"
            label={"Last Name"}
            onChange={(e) => setLasttName(e.target.value)}
          />
          <InputBox
            placeholder="harkirat@gmail.com"
            label={"Email"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button label={"Sign up"} onClick={postData} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;