import React from "react";

const Task = ({ singleTask }) => {
  console.log(singleTask);
  const { task, description, index } = singleTask || {};
  return (
    <tr>
      <th>{index}</th>
      <td>{task}</td>
      <td>{description}</td>
      <td>
        <button class="btn btn-success btn-xs">Complete</button>
      </td>
      <td>
        <button class="btn btn-error btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default Task;
