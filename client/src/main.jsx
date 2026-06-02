import { ClerkProvider } from '@clerk/react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const PUBLISHABLE_KEY=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUBLISHABLE_KEY) {
  throw new Error("clerk key missing");
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider>
      <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>

)
