import GameLogo from "./GameLogo";
import QuestionsBox from "./QuestionsBox";
import ProgressBar from "./ProgressBar";

export default function GameScreen(){


    return(
        <div className="game-screen">
            <GameLogo />
            <QuestionsBox />
        </div>
    );
}