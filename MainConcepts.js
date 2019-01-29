function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = { firstName: 'Mark', lastName: 'Kim' };
const element = <h1>hello, {formatName(user)}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
