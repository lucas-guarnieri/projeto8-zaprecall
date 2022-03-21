import logoPequeno from "./../../img/logo-pequeno.png";

export default function GameLogo(){
    return(
        <div className="game-logo">
            <img src={logoPequeno} alt="logo-pequeno"/>
            <h1>ZapRecall</h1>
        </div>
    );
}