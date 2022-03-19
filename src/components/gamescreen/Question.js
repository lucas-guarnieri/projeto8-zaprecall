import { useState } from "react";
import setinha from "./../../img/setinha.png";


export default function Question(props){
    const {number, question, answer} = props;

    
    const [turned, setTurned] = useState(false);
    const [face, setFace] = useState("question"); ///question answer
    const [color, setColor] = useState("black"); ///baclk yellow red

    
    function QuestionNumSide(props){
        const css = `question-box ${props.color}`;
        const text = `Pergunta ${props.num+1}`;
        function validateClick(color){
            if (color === "black"){
                props.setTurned(true);
            }
        } 
        return(
            <div className={css}>
                <p>{text}</p>
                <ion-icon name="chevron-forward-outline" onClick={()=>validateClick(props.color)}></ion-icon>
            </div>
        );
    }

    function QuestionCardSide(props){
        return(
            props.face === "question" ? (<QuestionSide question={props.question} setFace={props.setFace}/>) : (<QuestionSide question={props.question} setFace={props.setFace}/>)
        );
    }

    function QuestionSide(props){
        return(
            <div className="question-card-side card-side">
                <p>{props.question}</p>
                <img className="setinha" src={setinha} onClick={()=>props.setFace("answer")} />
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