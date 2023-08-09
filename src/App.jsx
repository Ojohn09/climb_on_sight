import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login_views from './auth/Login_views'
import SignUp_views from './auth/SignUp_views'
import ProtectedRoute from './routes/ProtectedRoutes'
import Dashboard_page from './pages/dashboard/Dashboard_page'
import { useSelector } from 'react-redux'
import SuccessPage_comp from './auth/signup/SuccessPage_comp'

function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          {/* Redirect to dashboard if user is authenticated */}
          <Route path='/' element={isAuthenticated ? <Navigate to='/dashboard' /> : <Navigate to='/login' />} />

          {/* Public routes */}
          <Route path='/login' element={<Login_views />} />
          <Route path='/signup' element={<SignUp_views />} />
          <Route path='/dashboard' element={<Dashboard_page />} />

          <Route path='/success-page' element={<SuccessPage_comp />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
