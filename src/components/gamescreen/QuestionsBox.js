import Question from "./Question";


export default function QuestionsBox(props){
    const {choosenDeck, goal} = props;
    let deck = [
        [{question:"O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question:"O React é __ ",  answer:"Uma biblioteca JavaScript para construção de interfaces"},
        {question:"Componentes devem iniciar com __ ", answer:"Letra maiúscula"},
        {question:"Podemos colocar __ dentro do JSX", answer:"Expressões"},
        {question:"O ReactDOM nos ajuda __ ", answer:"Interagindo com a DOM para colocar componentes React na mesma"},
        {question:"Usamos o npm para __", answer:"Gerenciar os pacotes necessários e suas dependências"},
        {question:"Usamos props para __", answer:"Passar diferentes informações para componentes"},
        {question:"Usamos estado (state) para __ ", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
        ],
        [{question:"8x8", answer: "64"},
        {question:"5x9", answer: "45"},
        {question:"3x7", answer: "21"},
        {question:"9X7", answer: "63"},
        {question:"6x7", answer: "42"},
        {question:"1x2", answer: "2"},
        {question:"4x4", answer: "16"},
        {question:"7x7", answer: "49"}
        ]
    ]
};