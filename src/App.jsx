import { useState } from "react";
import Startgame from "./Components/Startgame";
import GamePlay from "./Components/GamePlay";
function App() {
 const [isGameStarted , setIsGameStarted] = useState(false);
 
 const toggleGamePlay = () =>{
  setIsGameStarted((prev) => !prev )
 };
 
 return (
    <>{ isGameStarted ? <GamePlay/> : <Startgame toggle={toggleGamePlay}   /> }   </>
  )
}

export default App
