import React, { useEffect } from 'react';
import MessageForm from './MessageForm';


const AllPosts = ({token, posts, setPosts})=> {
        if(!posts) {
            <h1>Nobody is selling anything right now. Try Craigslist.</h1>
        };

    useEffect(() => {
        getPosts()
    }, [])
  
    const handleDelete = async (id) => {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${id}`, {
            method: 'DELETE',
            headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
              const data = await response.json();
            }

      
    const getPosts = async () => {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
            headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
    
        const {data: {posts}} = await response.json()
        setPosts(posts) 


    };

   


return <>
    { 
        posts.map((post) => {
            const {title, description, price, location, _id, author, isAuthor, messages, username} = post;
            return (<div className='card' key={_id}>
                <div key = {_id} className = "post">
                <h2 className='postTitle'>{title}</h2>
                <h3>{price}</h3>
                <div> {description}</div>
                {location === "[On Request]" ? "" :<h3>Location: {location}</h3> }
                <h3>Posted By: {author.username}</h3>
                {`${token}` && !isAuthor ? <MessageForm /> : "" }
                {`${token}` && isAuthor ? <button className="btn btn-outline-info">Edit</button> : "" }
                {`${token}` && author.username === "jess" ? <button className="btn btn-outline-danger" onClick= {() => {handleDelete(_id)}}>Delete</button> : "" }
              
               
            </div>
            </div>
      
            )
        })
    }

</>

};

export default AllPosts;