export default function GoalInput(props){
    
    return (
        <input className="goal-input box" 
        placeholder="Digite sua meta de zaps..." 
        onChange={e => e.target.value==="" ? props.setGoal(8) : props.setGoal(e.target.value)}/>
    );
}
