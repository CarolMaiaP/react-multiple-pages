interface homeProps{
  userName: string;
}

export function Home({userName}: homeProps){
  return(
    <h1>This is home page</h1>
  )
}