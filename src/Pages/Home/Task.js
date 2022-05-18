import React from "react";

const Task = ({ task }) => {
  const { name, desc, index } = task;
  return (
    <tr>
      <th>{index}</th>
      <td>{name}</td>
      <td>{desc}</td>
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
