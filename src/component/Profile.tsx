import { useContext } from "react"
import { AppContext } from "../App"
import { ChangeUser } from "./ChangeUser"

export function Profile(){
  const { userName } = useContext(AppContext)

  return(
    <div>
      <h1>Profile: the user is: { userName }</h1>
      <ChangeUser />
    </div>
  )
}