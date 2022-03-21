export default function GoalInput(props){
    
    return (
        <input className="goal-input box" 
        placeholder="Digite nova meta se quiser..." 
        onChange={e => e.target.value==="" ? props.setGoal(8) : props.setGoal(e.target.value)}/>
    );
}
