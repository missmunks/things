
import React from 'react';
import {Link} from 'react-router-dom';




const Nav = ({token }) => {

    const logOut= (ev) => {
        if(token){
            alert("You can never log out. Once you log in, your soul is ours. MUA HA HA")
            return  "log Out"  
        }
      }

    return (
        <nav className = "nav">
            {token ? <Link to='/Profile'>Profile</Link> : "" }
            <Link to='/AllPosts'>Posts</Link>
            <Link to='/login' onClick={logOut}>{token ? "Log Out" : "Login"}</Link>
            {token ? <Link to='/AddPost'>AddPost</Link> : ""}
        </nav>
    );
}

export default Nav;