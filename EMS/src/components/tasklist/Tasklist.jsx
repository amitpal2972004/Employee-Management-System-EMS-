import React from "react";
import Accepttask from "./accepttask";
import Newtask from "./newtask";
import Completetask from "./completetask";
import Failedtask from "./failedtask";

const Tasklist = ({ tasks, onStatusChange }) => {
  
  if (!tasks || tasks.length === 0)
    return <div className="text-gray-400 text-center py-10">No tasks found</div>;

  return (
    <div
      id="tasklist"
      className="flex  items-center justify-start gap-5 h-[55%] overflow-x-auto flex-nowrap w-full py-5 mt-10"
    >
      {tasks.map((task) => {
        switch (task.status) {
          case "new":
            return (
              <Newtask
                key={task._id}
                data={task}
                onStatusChange={onStatusChange}
              />
            );
          case "in-progress":
            return (
              <Accepttask
                key={task._id}
                data={task}
                onStatusChange={onStatusChange}
              />
            );
          case "completed":
            return <Completetask key={task._id} data={task} />;
          case "failed":
            return <Failedtask key={task._id} data={task} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Tasklist;
