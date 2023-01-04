import { Link } from "react-router-dom";
import '../styles/Navbar.scss'

export function Navbar(){
  return(
    <div className="navbar">
      <h3><Link to="/">Home</Link></h3>
      <h3><Link to="/profile">Profile</Link></h3>
      <h3><Link to="/contato">Contato</Link></h3>
    </div>
  )
}