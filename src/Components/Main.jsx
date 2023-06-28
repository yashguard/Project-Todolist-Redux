import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import TaskBox from "./TaskBox";

const Main = () => {
  let proemail = useSelector((store)=>(store.email))
  return (
    <div className="main-box">
      {proemail === "" ? <SignIn/> : <TaskBox/>}
    </div>
  );
};

export default Main;
