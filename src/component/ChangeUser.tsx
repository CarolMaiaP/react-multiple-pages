import { useContext, useState } from "react"
import { AppContext } from "../App"

export function ChangeUser(){
  const { setUserName } = useContext(AppContext)
  const [changeUser, setChangeUser] = useState("")

  function handleChangeUser(){
    setUserName(changeUser);
  }

  return(
    <div className="changeUser">
      <input type="text" onChange={(event) => setChangeUser(event.target.value)} />
      <button onClick={handleChangeUser}>Change</button>
    </div>
  )
}