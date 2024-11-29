import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Appcontectprovider from './Componante/Context/Appcontext.jsx';



createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Appcontectprovider>

 <App></App>
 </Appcontectprovider>
 
 </BrowserRouter>
  
  
)
