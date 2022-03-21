import { useState } from "react";
import setinha from "./../../img/setinha.png";

export default function Question(props){
    const {number, question, answer, progressList, setProgressList} = props;
    const [turned, setTurned] = useState(false);
    const [face, setFace] = useState("question"); ///question answer
    const [color, setColor] = useState("black"); ///black red yellow green
    
    function QuestionNumSide(){
        const css = `question-box ${color}`;
        const text = `Pergunta ${number+1}`;

        if (color === "red"){
            return(
                <div className={css}>
                    <p>{text}</p>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            );
        }
        else if (color === "yellow"){
            return(
                <div className={css}>
                    <p>{text}</p>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            );
        }
        else if(color === "green"){
            return(
                <div className={css}>
                    <p>{text}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            );
        }else{
            return(
                <div className={css}>
                    <p>{text}</p>
                    <ion-icon name="chevron-forward-outline" onClick={()=>setTurned(true)}></ion-icon>
                </div>
            );
        }
        
    }

    function QuestionCardSide(){
        return(
            face === "question" ? (<QuestionSide question={question} setFace={setFace}/>) : (<AnswerSide face={face} answer={answer} setColor={setColor} setFace={setFace} setTurned={setTurned}/>)
        );
    }

    function QuestionSide(){
        return(
            <div className="question-card-side card-side">
                <p>{question}</p>
                <img className="setinha" src={setinha} onClick={()=>setFace("answer")} />
            </div>
        );
    }

    function AnswerSide(){
        return(
            <div className="answer-card-side card-side">
                <p>{answer}</p>
                <div className="button-box">
                    <button className="red-button answer-button" onClick={changeToRed}>Não lembrei</button>
                    <button className="yellow-button answer-button" onClick={changeToYellow}>Quase não lembrei</button>
                    <button className="green-button answer-button" onClick={changeToGreen}>Zap!</button>
                </div>
            </div>
        );
    }

    function changeToRed(){
        setColor("red");
        setTurned(false);
        setProgressList([...progressList, <div className="red-icon" key={progressList.length}> <ion-icon name="close-circle"></ion-icon></div>]);
    }

    function changeToYellow(){
        setColor("yellow");
        setTurned(false);
        setProgressList([...progressList, <div className="yellow-icon" key={progressList.length}> <ion-icon name="help-circle"></ion-icon></div>]);
    }

    function changeToGreen(){
        setColor("green");
        setTurned(false);
        setProgressList([...progressList, <div className="green-icon" key={progressList.length}> <ion-icon name="checkmark-circle"></ion-icon></div>]);
    }

    return (
        <div className="question">
            {turned ? (<QuestionCardSide face = {face} question = {question} answer = {answer} setColor={setColor} setFace={setFace} setTurned={setTurned} />) : 
            (<QuestionNumSide color = {color} num = {number} setTurned={setTurned}/>)}
        </div>
    );

} 

//{turned ? (<p>Pergunta </p>) : 
//(<p>Pergunta #</p>)}
//(<QuestionCard face = {face}/>)