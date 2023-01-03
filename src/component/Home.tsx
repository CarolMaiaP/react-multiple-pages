import { useContext } from "react"
import { AppContext } from "../App"

export function Home(){
  const {userName} = useContext(AppContext)
  return(
    <h1>This is the home page and the user is {userName}</h1>
  )
}