import './User.css'

function User({item: {id, name}, getUsersID}) {

    const clicker = (id) => {
        console.log(id);
    }

    return (
        <div className={`singleUser`}>
            <div>
                <h4>{id} - {name}</h4>
            </div>
            <div>
                <button className={`singleUser-btn`} onClick={() => getUsersID(id)}>User details</button>
            </div>
        </div>
    );
}

export {User}
