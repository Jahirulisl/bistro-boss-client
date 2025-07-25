import React  from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//from react router >
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
       <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)
