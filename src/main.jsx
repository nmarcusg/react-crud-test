import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <h1>Main</h1>
    <RouterProvider router={router} />
    </>
  </StrictMode>,
)
