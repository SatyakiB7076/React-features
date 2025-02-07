import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, text: "hello world" }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        },
        updateTodo: (state, action) => {
            //first find the todo using id which needed to update
            const todo = state.todos = state.todos.find((todo) =>
                todo.id === action.payload);
            //if todo exists then change the text field from the payload
            if (todo) {
                todo.text = action.payload.text;
            }
        }
    }
})
//one export for individual use cases in the component
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;
//one export for the store
export default todoSlice.reducer;