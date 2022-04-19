import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {
    HomePage,
    NotFoundPage,
    PostsPage,
    UsersPage,
    SinglePostPage,
    SingleUserPage,
    UserPostsPage,
    PostComments
} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={`/`} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={`home`} element={<HomePage/>}/>
                <Route path={`users`} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<UserPostsPage/>}/>
                    </Route>
                </Route>
                <Route path={`posts`} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}>
                        <Route path={'comments'} element={<PostComments/>}/>
                    </Route>
                </Route>
                <Route path={`*`} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
