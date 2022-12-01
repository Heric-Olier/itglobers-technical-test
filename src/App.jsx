import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from './store/email/emailSlice'


function App() {
  
const onChange = (e) => {
  dispatch(setEmail(e.target.value))  
}


const dispatch = useDispatch()
const { value } = useSelector(state => state.email) // useSelector es un hook de react-redux que nos permite acceder al estado de la store

  return (
    <div className="App">
    <input type="text" value={value} onChange={onChange} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
