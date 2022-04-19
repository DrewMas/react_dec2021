import {Link} from "react-router-dom";

import './User.css';

function User({user}) {

    const {id, name} = user;

    return (
        <div className={'user'}>
            <div>{id} - {name}</div>
            <div>
                <Link to={id.toString()} state={user}>
                    <button className={'user-btn'}>Get Details</button>
                </Link>
            </div>
        </div>
    );
}

export {User};
