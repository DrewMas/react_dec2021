function PostDetails({post}) {
    const {id, title, body, userId} = post;

    return (
        <div>
            <p>ID: {id}, UserID: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
}

export {PostDetails};
