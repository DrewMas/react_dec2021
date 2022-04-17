import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Outlet} from "react-router-dom";

import {Post} from "../../components/Post/Post";

import './PostPage.css';

function PostsPage() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data));
    }, []);

    return (
        <div className={'postPage '}>
            <div className={'w50 allPosts'}>
                {posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
            <div className={'w50'}>
                <Outlet/>
            </div>
        </div>
    );
}

export {PostsPage};
