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

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>

        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!!!</h1>;
}

function GuestGreeting(props) {
    return <h1>Plz sign up...</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);

function Mailbox(props) {
    const unreadMsg = props.unreadMsg;
    return (
        <div>
            <h1>Hello!!</h1>
            {unreadMsg.length > 0 &&
                <h2>You have {unreadMsg.length} unread msg.</h2>
            }
        </div>
    );
}

const msg = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMsg={msg} />,
    document.getElementById('root')
);
