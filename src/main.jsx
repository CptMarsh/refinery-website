import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@fontsource-variable/inter';                  // display + UI (roman, 900 caps)
import '@fontsource-variable/inter/wght-italic.css';  // body voice (true Inter italic — the in-fiction default)
import '@fontsource/jetbrains-mono/400.css';          // mono
import '@fontsource/jetbrains-mono/500.css';
import '@/index.css'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <App />)
} else {
  ReactDOM.createRoot(rootElement).render(<App />)
}
