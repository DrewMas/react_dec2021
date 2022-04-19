import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services";
import {UserDetails} from "../../components";

function SingleUserPage() {

    const {id} = useParams();
    const {state} = useLocation();
    const [user, setUser] = useState(state);

    useEffect(() => {
        if (!state) {
            userService.getById(id).then(({data}) => setUser(data));
        } else {
            setUser(state);
        }
    }, [id, state]);

    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
}

export {SingleUserPage};
