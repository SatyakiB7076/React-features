import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
