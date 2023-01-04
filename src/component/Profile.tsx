import { useContext } from "react"
import { AppContext } from "../App"
import { ChangeUser } from "./ChangeUser"
import '../styles/Profile.scss'

export function Profile(){
  const { userName } = useContext(AppContext)

  return(
    <div className="profile">
      <h1>Profile: the user is: { userName }</h1>
      <ChangeUser />
    </div>
  )
}