import './Posts.css'

import {Post} from "../post/Post";

function Posts({posts}) {
    return (
        <div className={'posts-box'}>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
}

export {Posts}
