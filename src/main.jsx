import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './Components/Routes/Router/Router';
import AuthProvider from './Components/Provider/AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-8xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
