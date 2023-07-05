import { React } from "react";
import { googleauth } from "./Config";
import { useDispatch } from "react-redux";
import { AddEmail } from "../Redux/Action";

const SignIn = () => {
  let DispatchEmail = useDispatch();
  
  const handlesignin = () => {
    googleauth().then((userdetails) => {
      localStorage.setItem("Email", userdetails._tokenResponse.email);
      DispatchEmail(AddEmail(userdetails._tokenResponse.email));
    });
  };
  return (
    <center>
      <div className="email">
        <h1>First you have to sign in :</h1>
        <input
          className="submit"
          type="submit"
          value="Sign In"
          onClick={handlesignin}
        />
      </div>
    </center>
  );
};

export default SignIn;
