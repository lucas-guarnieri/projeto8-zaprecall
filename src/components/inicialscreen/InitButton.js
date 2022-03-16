export default function InitButton(){
    function startQuestions(){
        alert("esta funfando");
    }
    return(
        <button className="init-button box" onClick={startQuestions}>Iniciar Recall!</button>
    );
}

