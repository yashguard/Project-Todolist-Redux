import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Main = () => {
  let [data, setData] = useState();
  let [date, setDate] = useState();
  let [taskname, setTaskName] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3001/home`).then((response) => {
      setData(response.data);
    });
  }, []);
  const handletask = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/home`, {
      date: date,
      TaskName: taskname,
    });
  };

  return (
    <div>
      <form onSubmit={handletask}>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="text" onChange={(e) => setTaskName(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Main;
