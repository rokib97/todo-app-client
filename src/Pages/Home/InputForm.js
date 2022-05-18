import React from "react";

const InputForm = ({ handlePost }) => {
  return (
    <form onSubmit={handlePost}>
      <div class="card lg:w-3/6 md:w-screen w-screen bg-base-100 shadow-2xl mx-auto mt-8">
        <div class="card-body mx-auto lg:px-12">
          <input
            type="text"
            required
            name="task"
            placeholder="Task Name"
            class="input input-bordered w-full max-w-xs"
          />
          <textarea
            required
            class="textarea input-bordered max-w-xs lg:max-w-lg"
            rows={4}
            cols={64}
            name="description"
            placeholder="Task Description"
          ></textarea>
          <div class="card-actions justify-start">
            <button class="btn btn-success text-white">Add Task</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
