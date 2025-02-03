import store from './store'
import {Provider} from 'react-redux'
import './App.css'
import Counter from './components/Counter'

function App() {
  

  return (
    <Provider store={store}>
    <>
      <Counter/>
    </>
    </Provider>
  )
}

export default App
