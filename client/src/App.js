
import './App.css'
import { Detail, Form, Home, Landing } from './components'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  // To drive the Nav
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/'}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App