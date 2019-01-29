function formatDate(date) {
    return date.toLocaleDateString();
}

function AdditoinalInfo(props) {
    return (
        <div>
            <div>
                {props.additoinalInfo.text}
            </div>
            <div>
                {formatDate(props.additoinalInfo.date)}
            </div>
        </div>
    );
}

function UserInfo(props) {
    return (
        <div>
            <Avatar user={props.user} />
            <div>
                {props.user.name}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className='Avatar' src={props.user.url} alt={props.user.name} />
    );
}



function Comment(props) {
    return (
        <div>
            <UserInfo user={props.user} />
            <AdditoinalInfo additoinalInfo={props.additoinalInfo} />
        </div>
    );
}

const comment = {
    additoinalInfo: {
        date: new Date(),
        text: 'Mark is studying React.',
    },
    author: {
        name: 'Hello Kitty',
        url: 'https://placekitten.com/g/600/603',
    },
};

ReactDOM.render(
    <Comment
        user={comment.author}
        additoinalInfo={comment.additoinalInfo}
    />,
    document.getElementById('root')
);
