import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Analytics } from "@vercel/analytics/react"

import './global.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Analytics />
      <Footer />
    </>
  )
}

export default App
