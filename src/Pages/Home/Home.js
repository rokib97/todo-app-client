import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("tasks.json")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  const handlePost = (event) => {
    event.preventDefault();
    const post = event.target.task.value;
    const description = event.target.description.value;
    console.log(post, description);
  };
  return (
    <>
      <InputForm handlePost={handlePost}></InputForm>
      <div class="overflow-x-auto px-32 mt-8">
        <table class="tabletable-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <Task key={task._id} task={task} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
