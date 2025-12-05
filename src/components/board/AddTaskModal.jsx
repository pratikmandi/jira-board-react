import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/features/task/taskSlice";

export default function AddTaskModal({ column, close }) {
  const [title, setTitle] = useState("");
  const [taskId, setTaskId] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const submit = () => {
    if (!title.trim()) return;

    dispatch(
      addTask({
        column,
        task: { id: taskId, title, desc },
      })
    );
    close();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 animate-fadeIn">
        <h3 className="text-lg font-bold mb-4">Add Task ({column})</h3>

        <div className="flex flex-col gap-3">
          <input
            className="border rounded-md p-2"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border rounded-md p-2"
            placeholder="Task ID"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
          />

          <textarea
            className="border rounded-md p-2 resize-none"
            placeholder="Description"
            rows={3}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>

          <div className="flex justify-end gap-2 mt-2">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
              onClick={close}
            >
              Cancel
            </button>

            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={submit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
