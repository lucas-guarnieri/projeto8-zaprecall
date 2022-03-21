import { useState } from "react";
import party from "./../../img/party.png";
import sad from "./../../img/sad.png";

export default function ProgressBar(props){
    const {goal, progressList} = props;
    
    

    

    return(
        <div className="progress-bar">
            <p>{progressList.length}/8 CONCLUÍDOS</p>
            <div className="image-list">{progressList.length === 0 ? (<></>) : (<div className="image-list">{progressList}</div>)}</div>
        </div>
    );
}