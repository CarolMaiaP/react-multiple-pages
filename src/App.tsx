import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'
import { Contato } from './component/Contato'
import { Home } from './component/Home'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
