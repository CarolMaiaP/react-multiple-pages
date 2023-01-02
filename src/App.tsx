import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import './App.css'
import { Contato } from './component/Contato'
import { Home } from './component/Home'

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
