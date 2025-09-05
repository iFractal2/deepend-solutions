import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

console.log('Booting React…')  // sanity check in DevTools

const rootEl = document.getElementById('root')
if (!rootEl) {
  console.error('No #root element found in index.html')
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
