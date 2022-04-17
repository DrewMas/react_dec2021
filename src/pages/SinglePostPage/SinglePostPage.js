import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {PostDetails} from "../../components/PostDetails/PostDetails";

function SinglePostPage() {

    const {id} = useParams();
    const {state} = useLocation();

    const [post, setPosts] = useState([state]);

    useEffect(() => {
        if (!state) {
            postService.getById(id).then(({data}) => setPosts(data))
        } else {
            setPosts(state);
        }
    }, [id, state])

    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
}

export {SinglePostPage};
