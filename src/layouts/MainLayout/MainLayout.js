import {NavLink, Outlet, useNavigate} from "react-router-dom";

import './MainLayout.css'

function MainLayout() {

    const navigate = useNavigate();

    return (
        <div className={'layout'}>
            <div className={'header'}>
                <NavLink to="home">Home</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts">Posts</NavLink>
            </div>
            <div className={'navBtn-wrapper'}>
                <button className={'navBtn'} onClick={()=> navigate(-1)}>Prev</button>
                <button className={'navBtn'} onClick={()=> navigate(+1)}>Next</button>
            </div>
            <div className={'body'}>
                <Outlet/>
            </div>
        </div>
    );
}

export {MainLayout};
