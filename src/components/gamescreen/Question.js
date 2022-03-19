import { useState } from "react";

export default function Question(props){
    const {question, answer} = props;

    
    const [turned, setTurned] = useState("false");
    const [face, setFace] = useState("question");
    const [color, setColor] = useState("black");

    return (
        <div className="question">
            <p>OLa</p>
        </div>
    );

} 

//{turned ? (<p>Pergunta </p>) : 
//(<p>Pergunta #</p>)}
//(<QuestionCard face = {face}/>)