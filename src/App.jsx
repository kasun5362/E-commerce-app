import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/Molecules/SearchBar'
import Header from './components/Organisms/Header'
import Footer from './components/Organisms/Footer'
import Home from './pages/Home'


function App() {


  return (
    <div className='app-container'>
      <Header/>
        <main>
          <Home/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
