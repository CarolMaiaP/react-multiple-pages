import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'
import { Contato } from './component/Contato'
import { Home } from './component/Home'
import { Navbar } from './component/Navbar'
import { PageNotFound } from './component/PageNotFound'
import { Profile } from './component/Profile'

function App() {
  const [userName, setUserName] = useState("");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home userName={userName} />} />
          <Route path='/profile' element={<Profile userName={userName} />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
