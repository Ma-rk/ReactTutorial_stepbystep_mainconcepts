function Clock(props) {
    return (
        <div>
            <h1>Hello, React!!!</h1>
            <h2>It is {props.date.toLocaleTimeString()}!!</h2>
        </div>
    );
}

function tick() {
    const element = <Clock date={new Date()} />;
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
