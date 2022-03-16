import Logo from "./Logo";
import InitButton from "./InitButton";
import GoalInput from "./GoalInput";
import ChooseDeck from "./ChooseDeck";

export default function InicialScreen(){
    return(
    <div className="inicial-screen">
        <Logo />
        <ChooseDeck />
        <GoalInput />
        <InitButton />
    </div>
    );
}