import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={ <Login />  } />
          <Route path="/register" exact element={ <Register />  } />
          <Route path="/dashboard" exact element={ <Dashboard />  } />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App