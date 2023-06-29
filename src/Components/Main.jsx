import { useDispatch, useSelector } from "react-redux";
import SignIn from "./SignIn";
import TaskBox from "./TaskBox";
import { AddEmail } from "../Redux/Action";

const Main = () => {
  let proemail = useSelector((store) => store.email);
  let localemail = localStorage.getItem("Email")
  console.log(localemail)
  return (
    <div className="main-box">
      {localemail === "" || proemail === "" ? <SignIn /> : <TaskBox />}
    </div>
  );
};

export default Main;
