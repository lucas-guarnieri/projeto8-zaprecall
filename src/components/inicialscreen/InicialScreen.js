import Logo from "./Logo";
import InitButton from "./InitButton";
import GoalInput from "./GoalInput";
import ChooseDeck from "./ChooseDeck";
import { useState } from "react";

export default function InicialScreen(props){
    const {choosenDeck, setChoosenDeck, goal, setGoal} = props;
    const [visible, setVisible] = useState(true);
    
    return visible ? (
        <div className="inicial-screen">
            <Logo />
            <ChooseDeck setChoosenDeck={setChoosenDeck}/>
            <GoalInput setGoal = {setGoal}/>
            <InitButton setVisible = {setVisible} goal = {goal} choosenDeck = {choosenDeck}/>
        </div>
    ) : (
        <></>
    );
}
