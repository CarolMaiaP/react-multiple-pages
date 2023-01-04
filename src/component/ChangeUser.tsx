import { useContext, useState } from "react"
import { AppContext } from "../App"
import '../styles/ChangeUser.scss'

export function ChangeUser(){
  const { setUserName } = useContext(AppContext)
  const [changeUser, setChangeUser] = useState("")

  function handleChangeUser(){
    setUserName(changeUser);
  }

  return(
    <div className="changeUser">
      <input type="text" placeholder="type a user name" onChange={(event) => setChangeUser(event.target.value)} />
      <button onClick={handleChangeUser}>Change</button>
    </div>
  )
}