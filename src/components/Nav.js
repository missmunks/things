
import React from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/AllPosts'>Posts</Link>
            <Link to='/login'>Login</Link>
            <Link to='/AddPost'>AddPost</Link>
        </nav>
    );
}

export default Nav;