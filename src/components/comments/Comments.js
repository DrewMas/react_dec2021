import {useEffect, useState} from "react";
import {getComments} from "../../services/services";
import Comment from "../comment/Comment";

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value));
    },[]);

    return (
        <div className={`comments borderRadius boxSizing padding1rem`}>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
}
