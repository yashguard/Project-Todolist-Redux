import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../Redux/Action";

const List = (props) => {
  let { date, TaskName, id } = props.listItems;
  let [index,setIndex] = useState()
  const DispatchData = useDispatch();
  const GetData = () => {
    axios.get(`http://localhost:3001/list`)
    .then((response)=>DispatchData(Add(response.data.reverse())))
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/list/${id}`)
    GetData()
  }
  console.log(index)
  useEffect(() => {
    GetData()
  }, [])
  return (
    <div>
      <div className="listBox">
        <div className="row">
          <div className="id">
            <h1>{id}</h1>
          </div>
          <div className="content">
            <span>{date}</span>
            <h2>{TaskName}</h2>
          </div>
          <div className="buttons">
            <div className="row">
              <input id={id} type="submit" value="Delete" onClick={(e)=>handleDelete(e.target.id)} />
              <input type="submit" value="Update" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
