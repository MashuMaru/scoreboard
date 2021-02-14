const players = [
    {
        name: "Mashu",
        score: 52
    },
    {
        name: "Jeniffer",
        score: 12
    },
    {
        name: "Ava",
        score: 68
    },
    {
        name: "John",
        score: 34
    },

]

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

function Player(props) {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter
            score={props.score} />
        </div>
    );
};

function Counter(props) {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

function App(props) {
    return (
        <div className="scoreboard">
        <Header
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length}
        />
        {props.initialPlayers.map( player =>
            <Player name={player.name} score={player.score} />

        )}
        </div>
    )
}

// THIS IS THE JSX VERSION OF THE <APP /> COMPONENT. BELOW 🔽
// function App() {
//     return React.createElement(
//         "div",
//         { className: "scoreboard" },
//         React.createElement(Header, null),
//         React.createElement(Player, null)
//     );
// }

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById("root")
);