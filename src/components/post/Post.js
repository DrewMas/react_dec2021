function Post({post: {id, title, body}}) {

    return (
        <div>
            <h5>{id}. {title}</h5>
            <p>{body}</p>
        </div>
    );
}

export {Post};
