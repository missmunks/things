import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const AllPosts = ({token, posts, setPosts, postId, setPostId})=> {

  

    useEffect(async () => {
        if(token){
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts${token}` );
            const {data: {posts}} = await response.json()
            console.log(posts)
            setPosts(posts)
        }else{
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`);
        const {data: {posts}} = await response.json()
        console.log(posts)
        setPosts(posts)
        }

    }, [])

   
    // const posts = await response.json();
    // console.log('post data', data)
    // setPosts(posts);
    // return posts;

return <>
    <h1>Posts</h1>
    { 
        posts.map((post) => {
            const {title, description, price, location, _id, author, messages} = post;
            return ( <div key = {_id}>
                <h2>{title}</h2>
                <h3>Price: {price}</h3>
                <div> {description}</div>
                <h3>Location: {location}</h3>
                <h3>Posted By: {author.username}</h3>
                <h3>{messages}</h3>
                <button onClick = {()=> {setPostId(postId)}}>Edit</button>
            </div>
            )
        })
    }
    <Link to ={`/posts`}></Link>
</>

};

export default AllPosts;