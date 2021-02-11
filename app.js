const title = <h1>Scoreboard</h1>;

// const desc = <p>This is a paragraph.</p>;

    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();

    
    const desc = <p><span>{hour}</span><span> : </span> <span>{minutes}</span></p>;

    

// const desc = <p><span>{hour}</span><span> : </span> <span>{minutes}</span></p>;

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