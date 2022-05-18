import React from "react";
import { toast } from "react-toastify";

const Task = ({ singleTask, isReload, setIsReload }) => {
  const { _id, task, description, index, role } = singleTask || {};

  const handleDelete = (id) => {
    const url = `https://frozen-ridge-04688.herokuapp.com/task/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("Task Deleted Successfully!");
        setIsReload(!isReload);
      });
  };
  const handleComplete = (id) => {
    const url = `https://frozen-ridge-04688.herokuapp.com/task/${id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task Strikethrough Successfully!");
        setIsReload(!isReload);
      });
  };
  return (
    <tr>
      <th>{index}</th>
      <td className={role === "complete" && "line-through"}>{task}</td>
      <td className={role === "complete" && "line-through"}>{description}</td>
      <td>
        <button
          disabled={role === "complete"}
          onClick={() => handleComplete(_id)}
          className="btn btn-success btn-xs"
        >
          Complete
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error btn-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Task;
