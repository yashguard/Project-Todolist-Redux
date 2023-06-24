import React from "react";

const List = (props) => {
  let { date, TaskName, id } = props.listItems;
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
              <button>Delete</button>
              <button>Update</button>
              <button>Completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
