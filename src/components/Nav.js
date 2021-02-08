
import React from 'react';
import {Link} from 'react-router-dom';


const Nav = ({token }) => {

    return (
        <nav className = "nav">
            {token ? <Link to='/Profile'>Profile</Link> : "" }
            <Link to='/AllPosts'>Posts</Link>
            <Link to='/login' >{token ? "Logout" : "Login"}</Link>
            {token ? <Link to='/AddPost'>AddPost</Link> : ""}
        </nav>
    );
}

export default Nav;