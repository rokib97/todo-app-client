import React from "react";

const Task = ({ singleTask, isReload, setIsReload }) => {
  const { _id, task, description, index } = singleTask || {};

  const handleComplete = () => {};
  const handleDelete = (id) => {
    const url = `http://localhost:5000/task/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReload(!isReload);
      });
  };
  return (
    <tr>
      <th>{index}</th>
      <td>{task}</td>
      <td>{description}</td>
      <td>
        <button onClick={handleComplete} class="btn btn-success btn-xs">
          Complete
        </button>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} class="btn btn-error btn-xs">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Task;
