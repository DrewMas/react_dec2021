function SingleUsersPost({userPosts}) {

    const {id, title, body} = userPosts;
    return (
        <div>
            <h5>{id} - {title}</h5>
            <p>{body}</p>
        </div>
    );
}
export {SingleUsersPost};
