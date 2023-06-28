import React from "react";
import { googleauth } from "./Config";
import { useDispatch } from "react-redux";
import { AddEmail } from "../Redux/Action";

const SignIn = () => {
    alert("First you have to do SignIn for todo list")
    let DispatchEmail = useDispatch()
    const handlesignin = () => {
      googleauth().then((userdetails)=>DispatchEmail(AddEmail(userdetails._tokenResponse.email)))   
    }
  return (
    <div className="email">
      <input
        className="submit"
        type="submit"
        value="Sign"
        onClick={handlesignin}
      />
    </div>
  );
};

export default SignIn;
