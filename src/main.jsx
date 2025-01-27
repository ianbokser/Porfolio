import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './assets/LanguageContext.jsx'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </LanguageProvider>
)
