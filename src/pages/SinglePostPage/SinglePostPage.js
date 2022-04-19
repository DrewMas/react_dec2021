import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {PostDetails} from "../../components";

function SinglePostPage() {

    const {id} = useParams();
    const {state} = useLocation();

    const [post, setPost] = useState([state]);

    useEffect(() => {
        if (!state) {
            postService.getById(id).then(({data}) => setPost(data))
        } else {
            setPost(state);
        }
    }, [id, state])

    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
}

export {SinglePostPage};
