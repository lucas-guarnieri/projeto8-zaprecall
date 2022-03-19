import Logo from "./Logo";
import InitButton from "./InitButton";
import GoalInput from "./GoalInput";
import ChooseDeck from "./ChooseDeck";
import { useState } from "react";

export default function InicialScreen(){
    //const [goalNum, setGoalNum] = React.useState(8);
    //const [deckNum, setDeckNum] = React.useState(0);
    const [visible, setVisible] = useState(true);
    const [goal, setGoal] = useState(8);
    return visible ? (
        <div className="inicial-screen">
            <Logo />
            <ChooseDeck />
            <GoalInput setGoal = {setGoal}/>
            <InitButton setVisible = {setVisible} goal = {goal}/>
        </div>
    ) : (
        <></>
    );
}
