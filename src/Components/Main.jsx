import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../Redux/Action";

const Main = () => {
  const DispatchData = useDispatch();
  let [date, setDate] = useState();
  let [taskname, setTaskName] = useState();
  const GetData = () => {
    axios
      .get(`http://localhost:3001/list`)
      .then((response) => DispatchData(Add(response.data)))
  };
  const handletask = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/list`, {
      date: date,
      TaskName: taskname,
    });
    GetData()
  };
  useEffect(() => {
    GetData();
  }, []);

  const prodata = useSelector((store)=>store.data) 
  console.log(prodata);

  return (
    <div>
      <form onSubmit={handletask}>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="text" onChange={(e) => setTaskName(e.target.value)} />
        <input type="submit" value="AddTask" />
      </form>
    </div>
  );
};

export default Main;
