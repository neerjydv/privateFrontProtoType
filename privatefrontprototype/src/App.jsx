import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Views/Shared/Layout/Layout'

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Private</h1>
            <h2>My Personal Companion</h2>
            <h5>Your trusted digital sidekick for everyday life. Private keeps your world organized, secure, and effortlessly accessible.Whether you're planning your week, journaling your thoughts, or just need a quiet space to think-Private is your calm in the digital storm.</h5>
        </>
    )
}

export default App
