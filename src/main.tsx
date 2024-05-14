import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <Toaster position="top-right" reverseOrder={true} containerStyle={{marginTop: "80px"}}/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
