const players = [
    {
        name: "Mashu",
        score: 52,
        id: 1
    },
    {
        name: "Jeniffer",
        score: 12,
        id: 2
    },
    {
        name: "Ava",
        score: 68,
        id: 3
    },
    {
        name: "John",
        score: 34,
        id: 4
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
            <span className="player-name">{props.name}</span>
            <Counter  />
        </div>
    );
};


class Counter extends React.Component {
    state = {
        score: 0
    };

  

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    }

    reductionScore = () => {
        this.setState({
            score: this.state.score - 1
        })
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.reductionScore} className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button onClick={this.incrementScore} className="counter-action increment"> + </button>
            </div>
        )
    }
}

function App(props) {
    return (
        <div className="scoreboard">
        <Header
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length}
        />
        {props.initialPlayers.map( player =>
            <Player 
            key={player.id.toString()} 
            name={player.name} 
            />
        )}
        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById("root")
);