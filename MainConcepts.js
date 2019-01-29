function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = { firstName: 'Mark', lastName: 'Kim' };
const element = (
    <div>
        <h1>hello, {formatName(user)}</h1>
        <h2>welcome</h2>
    </div>);

ReactDOM.render(
    element,
    document.getElementById('root')
);
