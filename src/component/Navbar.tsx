import { Link } from "react-router-dom";

export function Navbar(){
  return(
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contato">Contato</Link>
    </div>
  )
}