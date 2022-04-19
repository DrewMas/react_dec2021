import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {userService} from "../../services";
import {User} from "../../components";

import './UserPage.css'

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div className={'userPage'}>
            <div className={'allUsers'}>
                {
                    users.map(value => <User key={value.id} user={value}/>)
                }
            </div>
            <div className={'userDetails'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};
