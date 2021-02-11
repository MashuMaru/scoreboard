const title = <h1>React element.</h1>;

const desc = <p>This is a paragraph.</p>;

const header = React.createElement(
    'header',
    null,
    title,
    desc
)

ReactDOM.render(
    header,
    document.getElementById("root")
);