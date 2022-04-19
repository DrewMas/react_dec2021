function SingePostComment({postComment}) {

    const {id, name, body, email} = postComment;

    return (
        <div>
            <h5>{id} - {name}</h5>
            <p>{body}</p>
            <p>{email}</p>
        </div>
    );
}

export {SingePostComment};
