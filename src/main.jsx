import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './Components/Routes/Router/Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-8xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)
