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
  // let [sid, setSid] = useState("");


  const adduser = (email, array) => {
    array.push({
      email: email,
      todo: []
    })
    if (array.length > 0) {
      axios.post(`https://crazy-lingerie-bat.cyclic.app/users`, array[0]).then(() => GetData())
    }
  }


  const finduser = (data) => {
    let val = data.filter((users) => users.email === getEmail)
    if (val.length > 0) {
      val.map((filuser) => {
        let user = filuser
        DispatchData(Add(user.todo, user.id))
        setUser(user)
      })
    }
    else {
      adduser(prodata[0].email, [])
    }
  }

  const GetData = () => {
    axios.get(`https://crazy-lingerie-bat.cyclic.app/users`).then((response) => {
      finduser(response.data)

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
    axios.patch(`https://crazy-lingerie-bat.cyclic.app/users/${prodata[0].id}`, user);
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