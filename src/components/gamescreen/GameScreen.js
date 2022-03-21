import GameLogo from "./GameLogo";
import QuestionsBox from "./QuestionsBox";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

export default function GameScreen(props){
    const {choosenDeck, goal} = props;
    const [progressList, setProgressList] = useState([]);
    const [wrongAns, setWrongAns] = useState(0);

    return(
        <div className="game-screen">
            <GameLogo />
            <QuestionsBox choosenDeck = {choosenDeck} progressList ={progressList} setProgressList={setProgressList} wrongAns={wrongAns} setWrongAns={setWrongAns}/>
            <ProgressBar goal={goal} progressList ={progressList} wrongAns={wrongAns}/>
        </div>
    );
}