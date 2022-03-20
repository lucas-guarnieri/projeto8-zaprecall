import GameLogo from "./GameLogo";
import QuestionsBox from "./QuestionsBox";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

export default function GameScreen(props){
    const {choosenDeck, goal} = props;

    return(
        <div className="game-screen">
            <GameLogo />
            <QuestionsBox choosenDeck = {choosenDeck}/>
        </div>
    );
}