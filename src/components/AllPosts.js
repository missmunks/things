import React, { useState, useEffect } from 'react';


const AllPosts = ({token, posts, setPosts, postId, setPostId})=> {
        if(!posts) {
            <h1>Nobody is selling anything right now. Try Craigslist.</h1>
        };

    useEffect(() => {
        getPosts()
        console.log("useEffect posts", posts)

    }, [])
  

    const getPosts = async () => {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`);
        const {data: {posts}} = await response.json()
        console.log(posts, "unauth posts")
        setPosts(posts) 
        console.log(posts, "are these posts") 

    }

   
    // const posts = await response.json();
    // console.log('post data', data)
    // setPosts(posts);
    // return posts;

return <>
    <h1>Posts</h1>
  
    { 
        posts.map((post) => {
            const {title, description, price, location, _id, author, messages, username} = post;
            return ( <div key = {_id}>
                <h2>{title}</h2>
                <h3>Price: {price}</h3>
                <div> {description}</div>
                <h3>Location: {location}</h3>
                <h3>Posted By: {username}</h3>
                <h3>{messages}</h3>
                <button onClick = {()=> {setPostId(postId)}}>Edit</button>
            </div>
            )
        })
    }

</>

};

export default AllPosts;