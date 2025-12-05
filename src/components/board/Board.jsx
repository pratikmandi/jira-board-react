import React, { useState } from "react";
import Column from "./Column";
import AddTaskModal from "./AddTaskModal";

const Board = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const openModal = (col) => {
    setSelectedColumn(col);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Jira Board (Vetty)
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <Column title="To Do" colKey="todo" onAdd={() => openModal("todo")} />
        <Column
          title="In Progress"
          colKey="progress"
          onAdd={() => openModal("progress")}
        />
        <Column
          title="Need Review"
          colKey="review"
          onAdd={() => openModal("review")}
        />
        <Column
          title="Completed"
          colKey="done"
          onAdd={() => openModal("done")}
        />
      </div>

      {showModal && (
        <AddTaskModal
          column={selectedColumn}
          close={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Board;
