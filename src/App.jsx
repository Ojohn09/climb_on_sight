import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login_views from './auth/Login_views'
import SignUp_views from './auth/SignUp_views'

function App() {


  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login_views />} />
          <Route path='/signup' element={<SignUp_views />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
