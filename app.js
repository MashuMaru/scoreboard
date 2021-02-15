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
            <button className="remove-player" onClick={ () => props.removePlayer(props.id)}> x </button>
            {props.name}</span>
            <Counter  />
        </div>
    );
};

class Counter extends React.Component {

    state = {
        score: 0
    }

    decrementScore = () => {
        this.setState(prevState => {
           return {
            score: prevState.score - 1
           }
        })
    }

    incrementScore = () => {
        this.setState(prevState => {
            return {
                score: prevState.score + 1
            }
        })
    }


    render() {
        return (
            <div className="counter">
                <button onClick={this.decrementScore} className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button onClick={this.incrementScore} className="counter-action increment"> + </button>
            </div>
        )
    }
}

class App extends React.Component {

    state = {
        players: [
            {
                name: "Mashu",
                id: 1
            },
            {
                name: "Jeniffer",
                id: 2
            },
            {
                name: "Ava",
                id: 3
            },
            {
                name: "John",
                id: 4
            },
        ]
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
            players: prevState.players.filter(p => p.id !== id)
            };
        })
    }

    render() {
        return (
            <div className="scoreboard">
            <Header
            title="Scoreboard" 
            totalPlayers={this.state.players.length}
            />
            {this.state.players.map( player =>
                <Player 
                id={player.id}
                key={player.id.toString()} 
                name={player.name} 
                removePlayer={this.handleRemovePlayer}
                />
            )}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
