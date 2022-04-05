export default function User({user: {id, name, username, email}}) {

    return (
        <div>
            <h3>{id}. {name}</h3>
            <p>Username is - {username}; email - {email}</p>
        </div>
    );
}
