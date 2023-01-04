import { useContext } from "react"
import { AppContext } from "../App"
import '../styles/Home.scss'

export function Home(){
  const {userName} = useContext(AppContext)
  return(
    <div className="home">
      <h1>This is the home page and the user is {userName}</h1>
    </div>
  )
}