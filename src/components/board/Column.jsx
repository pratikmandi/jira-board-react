import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskCard from "./TaskCard";
import { moveTask } from "../../store/features/task/taskSlice";

export default function Column({ title, colKey, onAdd }) {
  const tasks = useSelector((state) => state.tasks[colKey]);
  const dispatch = useDispatch();

  const onDragOver = (e) => e.preventDefault();

  const onDrop = (e) => {
    const from = e.dataTransfer.getData("from");
    const index = e.dataTransfer.getData("index");
    dispatch(moveTask({ from, to: colKey, index: Number(index) }));
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 min-h-[500px] flex flex-col"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        <button
          onClick={onAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 rounded-md"
        >
          +
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {tasks?.map((task, index) => (
          <TaskCard key={task.id} task={task} index={index} colKey={colKey} />
        ))}
      </div>
    </div>
  );
}
