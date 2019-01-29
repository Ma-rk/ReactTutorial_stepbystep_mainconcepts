function UserGreeitng(props) {
    return <h1>Welcome back!!!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    if (props.isLoggedIn) {
        return <UserGreeitng />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);
