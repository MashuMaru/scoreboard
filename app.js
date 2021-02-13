const title = 'Scoreboard';
const desc = 'This is a paragraph.';

const header = (
    <header>
        <h1>{title}</h1>
        <p>{desc}</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById("root")
);