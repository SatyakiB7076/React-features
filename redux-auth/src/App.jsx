import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={< Home/>} />
          <Route path="/login" element={< Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
