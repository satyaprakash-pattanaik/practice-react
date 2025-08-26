import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      {/* Navbar is always visible */}
      <Navbar/>

      {/* Page content changes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
   </>
  )
}

export default App
