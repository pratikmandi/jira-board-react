export default function TaskCard({ task, colKey, index }) {
  const dragStart = (e) => {
    e.dataTransfer.setData("from", colKey);
    e.dataTransfer.setData("index", index);
  };

  return (
    <div
      className="bg-gray-50 p-3 rounded-md border shadow-sm hover:shadow-md cursor-grab text-gray-800"
      draggable
      onDragStart={dragStart}
    >
      <h4 className="font-bold text-sm">{task.title || "Untitled Task"}</h4>
      <p className="text-xs text-gray-500">ID: #{task.id}</p>
      {task.desc && <p className="text-xs mt-1 text-gray-600">{task.desc}</p>}
    </div>
  );
}
