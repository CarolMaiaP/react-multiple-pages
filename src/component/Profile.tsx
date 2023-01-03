import { useContext } from "react"
import { AppContext } from "../App"

export function Profile(){
  const { userName } = useContext(AppContext)

  return(
    <h1>Profile: the user is: { userName }</h1>
  )
}