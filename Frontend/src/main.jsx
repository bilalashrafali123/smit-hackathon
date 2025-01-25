import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Logout from './Pages/Logout.jsx'
import Layout from './Layout.jsx'
import CalculatorPage from './Pages/CalculatorPage.jsx'

const router = createBrowserRouter([
  {
      path: "",
      element: <Layout/>,
      children: [
          {
              path: "",
              element: <App/>
          },
          {
              path: "register",
              element: <Register/>
          },
          {
              path: "login",
              element: <Login/>
          },
          {
              path: "logout",
              element: <Logout/>
          },
          {
            path: "CalculatorPage",
            element: <CalculatorPage/>
        },
          
      ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)