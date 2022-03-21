import party from "./../../img/party.png";
import sad from "./../../img/sad.png";

export default function ProgressBar(props){
    const {goal, progressList, wrongAns} = props;
    function Party(){
        document.querySelector(".progress-bar").classList.add("bigger");
        return(
            <>
            <div className="top">
                <img src={party} alt="party" />
                <p><b> Parabéns!</b></p>
            </div>
            <div className="botton">
                <p> Você bateu sua meta!</p>
            </div>
            </>
        );
    }
    function Sad(){
        document.querySelector(".progress-bar").classList.add("bigger");
        return(
            <>
            <div className="top">
                <img src={sad} alt="sad" />
                <p><b> Quase lá!</b></p>
            </div>
            <div className="botton">
                <p> Não desanime!</p>
            </div>
            </>
        );
    }
    function EndMessage(){
        let rightAns = 8 - wrongAns;
        return (rightAns >= goal ? (<Party />) : (<Sad />))
    }
    

    return(
        <div className="progress-bar">
            {progressList.length<8 ? (<></>) : (<EndMessage />)}
            <p>{progressList.length}/8 CONCLUÍDOS</p>
            <div className="image-list">{progressList.length === 0 ? (<></>) : (<div className="image-list">{progressList}</div>)}</div>
        </div>
    );
}