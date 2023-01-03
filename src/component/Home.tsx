interface homeProps{
  userName: string;
}

export function Home({userName}: homeProps){
  return(
    <h1>This is the home page and the user is {userName}</h1>
  )
}