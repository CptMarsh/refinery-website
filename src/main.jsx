import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@fontsource-variable/inter';                  // display + UI (900 caps)
import '@fontsource/instrument-serif/400.css';        // body voice (roman)
import '@fontsource/instrument-serif/400-italic.css'; // body voice (italic — the in-fiction default)
import '@fontsource/jetbrains-mono/400.css';          // mono
import '@fontsource/jetbrains-mono/500.css';
import '@/index.css'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <App />)
} else {
  ReactDOM.createRoot(rootElement).render(<App />)
}
