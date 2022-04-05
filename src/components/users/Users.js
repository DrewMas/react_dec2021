import {useEffect, useState} from "react";
import {getUsers} from "../../services/services";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);

    return (
        <div className={`users borderRadius boxSizing width49`}>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
}
