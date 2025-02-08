import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Todo List</h2>

      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No todos yet. Add one!</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition ml-7"
              >
                <DeleteIcon />
              </button>
              <button
                onClick={() => {
                  const updatedText=prompt("Edit Todo",todo.text)
                if(updatedText){
                  dispatch(updateTodo({id:todo.id,text:updatedText}))
                }}
                }
                className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
              >
                <ModeEditIcon />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
