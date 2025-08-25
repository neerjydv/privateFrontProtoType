import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import About from './Components/Views/About/About.jsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Views/Shared/Layout/Layout.jsx'
import CheckPNR from './Components/Views/CheckPNR/CheckPNR.jsx'
const routTable = createBrowserRouter([
    { path: '/', element: <App /> }, 
    { path: '/about', element: <About /> },
    { path: '/CheckPNR', element: <CheckPNR/> } 
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Layout>
            <RouterProvider router={routTable} />
        </Layout>
    </StrictMode>
)
