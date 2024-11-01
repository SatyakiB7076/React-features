import './App.css'
import {useReducer} from 'react'

//reducer-pure function
const authReducer=(state,action)=>{
switch(action.type){
  case 'LOGIN' :
    return{
      ...state,
      isAuthenticated:true,
      user:action.payload
    };
    case 'LOGOUT':
      return{
      ...state,
      isAuthenticated:false,
      user:null,  
      };
      default:
        return state;
    }
}


const initialState={
  isAuthenticated:false,
  user:null,
}

function App() {
  const [state,dispatch]=useReducer(authReducer,initialState)
  const handleLogin=()=>{
  const userData={name:'Satya'};
  dispatch({type:'LOGIN',payload:userData})
  }
  const handleLogout=()=>{
    dispatch({type:'LOGOUT'})
  }

  return (
    <div>
    {state.isAuthenticated ?(

<div>
  <h1>Welcome, {state.user.name}</h1>
  <button onClick={handleLogout}>Logout</button>
</div>
    ):(
      <button onClick={handleLogin}>Login</button>
    )}
    </div>
  )
}

export default App
