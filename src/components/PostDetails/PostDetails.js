import {Link, Outlet} from "react-router-dom";

import './PostDetails.css';

function PostDetails({post}) {
    const {id, title, body, userId} = post;

    return (
        <div className={'postDetails'}>
            <div>
                <p>ID: {id}, UserID: {userId}</p>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
            </div>
            <Link to={'comments'}>
                <button className={'postDetails-btn'}>Get Comments</button>
            </Link>
            <Outlet/>
        </div>
    );
}

export {PostDetails};
