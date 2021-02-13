function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

function Player() {
    return (
        <div className="player">
            <span className="player-name">
                Mashumaru
            </span>
            <Counter />
        </div>
    );
};

function Counter() {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">3</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

function App() {
    return (
        <div className="scoreboard">
        <Header />
        <Player />

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);