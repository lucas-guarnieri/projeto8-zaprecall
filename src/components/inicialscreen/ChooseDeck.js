export default function ChooseDeck(props){
    const {setChoosenDeck} = props;
    function handleChange(e){
        if (e === "deckReact"){
            setChoosenDeck(0);
        }
        else if (e === "deckManeiro"){
            setChoosenDeck(1);
        }

    }

    return(
        <select className="choose-deck box" onChange={e => handleChange(e.target.value)}>
            <option value="" disabled selected hidden>Escolha seu deck</option>
            <option value="deckReact" >Java React</option>
            <option value="deckManeiro">Deck 2</option>
        </select>
    );
} 