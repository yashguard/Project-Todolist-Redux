import React from "react";
import { googleauth } from "./Config";

const SignIn = () => {
    const handlesignin = () => {
      googleauth().then((userdetails)=>console.log(userdetails._tokenResponse.email))
    }
  return (
    <div>
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
