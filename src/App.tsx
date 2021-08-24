import React, { useState } from 'react'
import logo from '../public/logo.svg'
import './App.css'
//@ts-ignore: virtual module is missing from types
import { useRegisterSW } from 'virtual:pwa-register/react';

const intervalMS = 60 * 60 * 1000

function App() {
  const [count, setCount] = useState(0)

  const updateServiceWorker = useRegisterSW({
    onRegistered(r: any) {
      r && setInterval(() => {
        r.update()
      }, intervalMS)
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
