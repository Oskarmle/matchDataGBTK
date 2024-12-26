import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// This is some code i was working on before i had a bug-fix

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* This is some important bug-fixing code */}
  </StrictMode>,
)
