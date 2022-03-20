import InicialScreen from "./inicialscreen/InicialScreen";
import GameScreen from "./gamescreen/GameScreen";
import { useState } from "react";

export default function App(){
    const [choosenDeck, setChoosenDeck] = useState(3);
    const [goal, setGoal] = useState(8);
    return(
        <>
            <InicialScreen choosenDeck={choosenDeck} setChoosenDeck={setChoosenDeck} goal={goal} setGoal={setGoal}/>
            <GameScreen choosenDeck={choosenDeck} goal={goal}/>
        </>
    );
}