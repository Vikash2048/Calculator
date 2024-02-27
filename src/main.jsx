import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

import InputState  from './context/InputState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <InputState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </InputState>

)
