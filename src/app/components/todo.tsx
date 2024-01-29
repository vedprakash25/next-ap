import React from "react";

const Todo = ({ todo, onDelete }: { todo: string; onDelete: Function }) => {
  return (
    <div className="flex justify-between items-center mt-1">
      {todo}
      <button
        className="bg-red-400 px-3 py-1 rounded-sm"
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
