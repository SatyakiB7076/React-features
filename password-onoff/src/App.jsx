import { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './App.css'

function App() {
  const [password, setPassword] = useState("false")
const handleClick=()=>{
  setPassword(!password);
}
  return (
    <div className='flex items-center justify-center '>
      <input type={password?"password":"text"} name="password" placeholder='Password' className='w-96'/>
      {password?
      
      <div className='-ml-10 cursor-pointer' onClick={handleClick}><RemoveRedEyeIcon/></div> :
      <div className='-ml-10 cursor-pointer' onClick={handleClick}><VisibilityOffIcon/></div> 

    }
    </div>
  )
}

export default App
