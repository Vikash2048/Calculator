import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

import InputState from './context/InputState'
import OutputState from './context/OutputState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <InputState>
    <OutputState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </OutputState>
  </InputState>

)
