import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {userService} from "../../services";
import {SingleUsersPost} from "../../components";

import './UserPostsPage.css';

function UserPostsPage() {


    const {id} = useParams();
    const [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
        userService.getUsersPosts(id).then(({data})=> setUserPosts(data));
    },[id]);

    return (
        <div className={'userPosts'}>
            {userPosts.map(value => <SingleUsersPost key={value.id} userPosts={value}/>)}
        </div>
    );
}

export {UserPostsPage};
