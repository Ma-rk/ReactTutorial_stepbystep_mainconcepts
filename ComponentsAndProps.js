function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img className='Avatar' src={props.user.url} alt={props.user.name} />
    );
}

function Comment(props) {
    return (
        <div>
            <div>
                <Avatar user={props.user} />
                <div>
                    {props.user.name}
                </div>
            </div>
            <div>
                {props.text}
            </div>
            <div>
                {props.date}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'Mark is studying React.',
    author: {
        name: 'Hello Kitty',
        url: 'https://placekitten.com/g/600/603',
    },
};

ReactDOM.render(
    <Comment
        user={comment.author}
        text={comment.text}
        date={formatDate(comment.date)}
    />,
    document.getElementById('root')
);
