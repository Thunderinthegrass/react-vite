import { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HomePage from '../Pages/HomePage'
import TextComponent from '../TextComponent'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <main className="app">
        <Header />
        <HomePage isDark={isDark} setIsDark={setIsDark} />
        <Footer />
        <TextComponent />
      </main>
    </>
  )
}

export default App
