import GameLogo from "./GameLogo";
import QuestionsBox from "./QuestionsBox";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

export default function GameScreen(props){
    const {choosenDeck, goal} = props;
    const [progressList, setProgressList] = useState([]); //0 for red, 1 for yelolow, 2 for green

    return(
        <div className="game-screen">
            <GameLogo />
            <QuestionsBox choosenDeck = {choosenDeck} progressList ={progressList} setProgressList={setProgressList} />
            <ProgressBar goal={goal} progressList ={progressList} />
        </div>
    );
}