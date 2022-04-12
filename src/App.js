import './App.css';

import {Users, UserDetails, Posts} from "./components";
import {userService} from "./services";
import {useState} from "react";

function App() {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    const getUsersID = async (id) => {
        const {data} = await userService.getById(id)
        setUser(data);
    }

    const getUserPosts = async (id) => {
        const {data} = await userService.getPostsByUser(id);
        setPosts(data)
    }

    return (
        <div className="App">
            <Users getUsersID={getUsersID}/>
            {user && <UserDetails user={user} getUserPosts={getUserPosts}/>}
            {posts && <Posts posts={posts}/>}
        </div>
    );
}

export default App;
