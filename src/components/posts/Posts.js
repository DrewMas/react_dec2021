import {useEffect, useState} from "react";
import {getPosts} from "../../services/services";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value));
    }, []);

    return (
        <div className={`posts borderRadius boxSizing width49 padding1rem`}>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
}
