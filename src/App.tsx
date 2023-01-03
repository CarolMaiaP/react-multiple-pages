import { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'
import { Contato } from './component/Contato'
import { Home } from './component/Home'
import { Navbar } from './component/Navbar'
import { PageNotFound } from './component/PageNotFound'
import { Profile } from './component/Profile'

export const AppContext = createContext({} as any)

function App() {

  const [userName, setUserName] = useState("CarolMaia");
  return (
    <div className="App">
      <AppContext.Provider value={{userName, setUserName}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
