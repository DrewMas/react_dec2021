import {Link} from "react-router-dom";

import './Post.css';

function Post({post}) {

    const {id, title} = post;

    return (
        <div className={'post'}>
            <div><p>{id} - {title}</p></div>
            <div>
                <Link to={`${id}`} state={post}>
                    <button className={'post-btn'}>Get Details</button>
                </Link>
            </div>
        </div>
    );
}

export {Post};
