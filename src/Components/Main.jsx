import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import TaskBox from "./TaskBox";

const Main = () => {
  let proemail = useSelector((store) => store.users[0].email);
  let localemail = localStorage.getItem("Email");
  return (
    <div className="main-box">
      {localemail === "" || proemail === "" ? <SignIn /> : <TaskBox />}
    </div>
  );
};

export default Main;
