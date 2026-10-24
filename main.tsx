import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/theme.css'
import App from './App'
import { AppProvider } from './Components/AppProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode><BrowserRouter><AppProvider><App /></AppProvider></BrowserRouter></StrictMode>,
)

// PWA: el service worker solo se registra en producción (npm run build + npm run preview).
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(() => {}) })
}
