import logo from "./../../img/logo.png";

export default function Logo(){
    return(
        <div className="logo">
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
        </div>
    );
}