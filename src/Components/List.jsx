import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Add } from "../Redux/Action";

const List = ({ TaskName, date }) => {
  const GetData = () => {
    axios.get(`http://localhost:3001/users`);
  };
  useEffect(() => {
    GetData();
  }, []);
  // const handleDelete = (id) => {
  //   axios.delete(`http://localhost:3001/users/${id}`);
  //   GetData();
  // };
  return (
    <div>
      <div className="listBox">
        <div className="row">
          <div className="content">
            <span>{date}</span>
            <h2>{TaskName}</h2>
          </div>
          <div className="buttons">
            <div className="row">
              <input type="submit" value="Delete" />
              <input type="submit" value="Update" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
