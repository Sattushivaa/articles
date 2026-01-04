import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Global.css'
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
</React.StrictMode>)