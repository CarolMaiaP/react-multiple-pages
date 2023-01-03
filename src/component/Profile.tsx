interface profileProps{
  userName: string;
}

export function Profile({userName}: profileProps){
  return(
    <h1>Profile: the user is: {userName}</h1>
  )
}