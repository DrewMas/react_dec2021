import {useEffect, useState} from "react";
import {postService} from "../../services";
import {useParams} from "react-router-dom";
import {SingePostComment} from "../../components/SingePostComment/SingePostComment";

import './PostComments.css';

function PostComments() {

    const {id} = useParams();
    const [postComments, setPostsComments] = useState([]);
    useEffect(() => {
        postService.getPostComments(id).then(({data}) => setPostsComments(data));
    }, [id]);

    return (
        <div className={'postComments'}>
            {postComments.map(value => <SingePostComment key={value.id} postComment={value}/>)}
        </div>
    );
}

export {PostComments};
