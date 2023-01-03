import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import './App.css'
import { Contato } from './component/Contato'
import { Home } from './component/Home'
import { PageNotFound } from './component/PageNotFound'

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
