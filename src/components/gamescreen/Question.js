import { useState } from "react";
import setinha from "./../../img/setinha.png";


export default function Question(props){
    const {number, question, answer} = props;

    
    const [turned, setTurned] = useState(false);
    const [face, setFace] = useState("question"); ///question answer
    const [color, setColor] = useState("black"); ///baclk yellow red

    
    function QuestionNumSide(){
        const css = `question-box ${color}`;
        const text = `Pergunta ${number+1}`;
        function validateClick(color){
            if (color === "black"){
                setTurned(true);
            }
        } 
        return(
            <div className={css}>
                <p>{text}</p>
                <ion-icon name="chevron-forward-outline" onClick={()=>validateClick(color)}></ion-icon>
            </div>
        );
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
                    <button className="red-button answer-button">Não lembrei</button>
                    <button className="yellow-button answer-button">Quase não lembrei</button>
                    <button className="green-button answer-button">Zap!</button>
                </div>
            </div>
        );
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