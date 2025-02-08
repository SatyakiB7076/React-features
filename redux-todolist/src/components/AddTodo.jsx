import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

  const dispatch = useDispatch();

  const [ input, setInput ] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <div>
      <form onSubmit={addTodoHandler} className="flex gap-2 items-center bg-white p-4 rounded-lg shadow-md">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add new todo here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Todo
        </button>
        
      </form>
    </div>
  )
}

export default AddTodo
