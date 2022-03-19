export default function InitButton(props){
    
    return(
        <button className="init-button box" onClick={()=> props.goal>8 ? alert("Sua meta de ser de no máximo 8 cards") : props.setVisible(false)}>Iniciar Recall!</button>
    );
}

//onClick={()=>props.setVisible(false)}