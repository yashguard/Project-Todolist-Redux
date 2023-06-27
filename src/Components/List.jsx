import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../Redux/Action";

const List = (props) => {
  let { date, TaskName, id } = props.listItems;
  const DispatchData = useDispatch();
  const GetData = () => {
    axios
      .get(`http://localhost:3001/list`)
      .then((response) => DispatchData(Add(response.data.reverse())));
  };
  useEffect(() => {
    GetData();
  }, []);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/list/${id}`);
    GetData();
  };
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
              <input
                id={id}
                type="submit"
                value="Delete"
                onClick={(e) => handleDelete(e.target.id)}
              />
              <input
                id={id}
                type="submit"
                value="Update"
                onClick={(e) => props.update(e.target.id, date, TaskName)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
