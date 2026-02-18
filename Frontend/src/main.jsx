import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import myStore from './redux/store.js'
import { Provider } from "react-redux"
  ;
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'



createRoot(document.getElementById('root')).render(

  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>


  </Provider>


)
