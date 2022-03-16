export default function ChooseDeck(){
    return(
        <select className="choose-deck box">
            <option value="" disabled selected hidden>Escolha seu deck</option>
            <option value="deckReact">Java React</option>
            <option value="deckManeiro">Deck 2</option>
        </select>
    );
} 