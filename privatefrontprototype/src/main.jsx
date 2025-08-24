import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './Components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const routTable = createBrowserRouter([
    { path: '/', element: <App /> }, 
    { path: '/about', element: <About /> }
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routTable} />
    </StrictMode>
)
