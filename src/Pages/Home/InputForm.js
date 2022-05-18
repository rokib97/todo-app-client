import React from "react";

const InputForm = ({ handlePost }) => {
  return (
    <form onSubmit={handlePost}>
      <div class="card w-screen shadow">
        <div class="card-body mx-auto">
          <input
            type="text"
            name="task"
            placeholder="Task Name"
            class="input input-bordered w-full max-w-xs"
          />
          <textarea
            class="textarea input-bordered max-w-lg"
            rows={4}
            cols={64}
            name="description"
            placeholder="Task Description"
          ></textarea>
          <div class="card-actions justify-start">
            <button class="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
