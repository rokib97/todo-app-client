import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InputForm from "./InputForm";
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    fetch("https://frozen-ridge-04688.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [isReload]);

  const handlePost = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    const description = event.target.description.value;
    const data = { task, description };
    const url = `https://frozen-ridge-04688.herokuapp.com/task`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Task Added Successfully!");
        setIsReload(!isReload);
        event.target.reset();
      });
  };
  return (
    <>
      <InputForm handlePost={handlePost}></InputForm>
      <div className="overflow-x-auto mt-8 lg:w-4/6 w-screen mx-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((singleTask, index) => (
              <Task
                isReload={isReload}
                setIsReload={setIsReload}
                key={singleTask._id}
                singleTask={singleTask}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
