import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
//import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
    

)


// import React, { Children } from 'react'
// import ReactDOM from 'react-dom/client'

// import {  
//   createBrowserRouter,   
//   RouterProvider,
// } from "react-router-dom";
// import ErrorPage from './error-page';
// import './index.css'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//           path: '',
//           element:
//         }  
      
      
//     ]
//   },

  
  
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

