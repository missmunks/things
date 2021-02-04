import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const EditPost = ({posts, setPosts, postId, setPostId, setTitle, setDescription}) => {
   
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'Application/json',
            "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify({
            title,
            price,
            description,
            location
          })
        });
        const data = await response.json();
        console.log(data)
        const {price} = posts
        if(data && data.title) {
            const updatePost = posts.map((post) => {
                if(post_id === postId){
                    return data;
                }else{
                    return post;
                }
            setPosts(updatePost);

            });
            const {title, description, price, location} = post
            setTitle("");
            setDescription("");
            setPostId(null);
        }
        
   


    return (
        <>
        <form onSubmit= {handleSubmit}>
          <input type='text' value={title} placeholder='Title' onChange={(ev) => setTitle( ev.target.value )} />
          <input type='text' value={price} placeholder='Price' onChange={(ev) => setPrice( ev.target.value )} />
          <input type='text' value={description} placeholder='description' onChange={(ev) => setDescription( ev.target.value )} />
          <input type='text' value={location} placeholder='Location' onChange={(ev) => setLocation( ev.target.value )} />
          <button type='submit' onClick={handleSubmit}>Edit</button>
        </form>
        <Link to='./Allposts'></Link>
        </>
        )
    }}

    export default EditPost;














   
