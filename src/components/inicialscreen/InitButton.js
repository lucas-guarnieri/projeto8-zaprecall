export default function InitButton(props){
    const {setVisible, goal, choosenDeck} = props;
    function verifyRequirements(){
        if(goal>8){
            alert("Sua meta de ser de no máximo 8 cards!");
        }
        else if (choosenDeck===3){
            alert("Escolha um deck primeiro!");
        }
        else{
            setVisible(false);
        }
    }
    
    return(
        <button className="init-button box" onClick={()=> verifyRequirements()}>Iniciar Recall!</button>
    );
}

