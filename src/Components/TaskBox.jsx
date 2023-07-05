import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Add, AddEmail } from "../Redux/Action";
import List from "./List";
import { SignOut } from "./Config";

const TaskBox = () => {
  const DispatchData = useDispatch();
  let [date, setDate] = useState("");
  let [taskname, setTaskName] = useState("");
  let [user, setUser] = useState();
  let [todos, setTodos] = useState();
  const prodata = useSelector((store) => store.users);
  let getEmail = localStorage.getItem("Email");
  let [newemail, setNewEmail] = useState();
  // let [sid, setSid] = useState("");
  let exisits = false;
  const GetData = () => {
    axios.get(`http://localhost:3001/users`).then((response) => {
      response.data.filter((user) => {
        if (user.email === prodata[0].email || user.email === getEmail) {
          setUser(user);
          DispatchData(Add(user.todo, user.id));
          console.log("yes", getEmail);
          exisits = true;
        } else if (
          (user.email !== prodata[0].email || user.email !== getEmail || user.email === undefined) &&
          !exisits
        ) {
          console.log("no", getEmail);
          setNewEmail(getEmail)
        }
      });
    });
  };
  useEffect(() => {
    GetData();
  }, []);
  const addTodo = () => {
    todos.push({
      TaskName: taskname,
      date: date,
    });
    axios.patch(`http://localhost:3001/users/${prodata[0].id}`, user);
    GetData();
  };
  if (newemail !== undefined) {
    let abcd = newemail
    console.log(abcd)
    axios.post(`http://localhost:3001/users`, {
      email: abcd,
      todo: []
    }).then((res) => console.log(res.data))
  }
  const handletask = (e) => {
    e.preventDefault();
    setDate("");
    setTaskName("");
    if (taskname === "") {
      alert("Please enter the task");
    } else if (date === "") {
      alert("Please enter the date");
    } else {
      if (todos === undefined) {
        todos = prodata[0].todo;
        addTodo();
      } else {
        setTodos(prodata[0].todo);
        addTodo();
      }
      alert("Task has been added");
    }
    GetData();
  };
  // const handleUpdate = (id, predate, OldTaskName) => {
  //   setDate(predate);
  //   setTaskName(OldTaskName);
  //   setSid(id);
  // };
  const handlesignout = () => {
    SignOut().then(() => {
      DispatchData(AddEmail(""));
      localStorage.setItem("Email", "");
      alert("You have succesfully signed out");
    });
  };
  return (
    <div>
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
          <div className="row">
            <input className="submit" type="submit" value="AddTask" />
          </div>
        </form>
      </div>
      <button onClick={handlesignout}>Sign out</button>
      {prodata[0].todo !== undefined &&
        prodata[0].todo.map((ele, i) => <List key={i} {...ele} />)}
    </div>
  );
};

export default TaskBox;
