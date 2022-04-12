import './Users.css'

import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../user/User";

function Users({getUsersID}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);



    return (
        <div className={`users`}>
            {
                users.map(value => <User key={value.id} item={value} getUsersID={getUsersID}/>)
            }

        </div>
    );
}

export {Users}
