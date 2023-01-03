import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'
import { Contato } from './component/Contato'
import { Home } from './component/Home'
import { Navbar } from './component/Navbar'
import { PageNotFound } from './component/PageNotFound'
import { Profile } from './component/Profile'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
