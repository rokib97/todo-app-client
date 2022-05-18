import React from "react";

const InputForm = ({ handlePost }) => {
  return (
    <form onSubmit={handlePost}>
      <div className="card lg:w-3/6 md:w-screen w-screen bg-base-100 shadow-2xl mx-auto mt-8">
        <div className="card-body mx-auto lg:px-12">
          <input
            type="text"
            required
            name="task"
            placeholder="Task Name"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea
            required
            className="textarea input-bordered max-w-xs lg:max-w-lg"
            rows={4}
            cols={64}
            name="description"
            placeholder="Task Description"
          ></textarea>
          <div className="card-actions justify-start">
            <button className="btn btn-success text-white">Add Task</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
