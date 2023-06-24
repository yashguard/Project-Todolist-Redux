import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../Redux/Action";
import List from "./List";

const Main = () => {
  const DispatchData = useDispatch();
  let [date, setDate] = useState("");
  let [taskname, setTaskName] = useState("");
  const GetData = () => {
    axios
      .get(`http://localhost:3001/list`)
      .then((response) => DispatchData(Add(response.data)));
  };
  const handletask = (e) => {
    e.preventDefault();
    setDate("");
    setTaskName("");
    if (taskname === "") {
      alert("Please enter the task");
    } else if (date === "") {
      alert("Please enter the date");
    } else {
      axios.post(`http://localhost:3001/list`, {
        date: date,
        TaskName: taskname,
      });
      GetData();
      alert("Task has been added");
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  const prodata = useSelector((store) => store.data);

  return (
    <div className="main-box">
      <div className="box">
        <form onSubmit={handletask}>
          <div className="row">
            <label>Enter your tasks :</label>
            <input
              className="addTask"
              autoFocus
              type="text"
              value={taskname}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <label>Select the date :</label>
          <input
            className="date"
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <input className="submit" type="submit" value="AddTask" />
        </form>
      </div>
      {prodata.map((ele, i) => (
        <List key={i} listItems={ele} />
      ))}
    </div>
  );
};

export default Main;
