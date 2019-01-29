class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state => ({ isToggleOn: !state.isToggleOn })));
        this.setState(() => ({ isToggleOn: !this.state.isToggleOn }));
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'On' : 'Off'}
            </button>
        );
    }
}

class LoggingButton1 extends React.Component {
    handleClick1 = () => {
        console.log('this is: ', this);
    }

    render() {
        return (
            <button onClick={this.handleClick1}>
                click me 1
            </button>
        );
    }
}

class LoggingButton2 extends React.Component {
    handleClick2() {
        console.log('this is: ', this);
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick2(e)}>
                click me 2
            </button>
        );
    }
}

function App() {
    return (
        <div>
            <Toggle />
            <LoggingButton1 />
            <LoggingButton2 />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
