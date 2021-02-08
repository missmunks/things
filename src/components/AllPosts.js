import React, { useState, useEffect } from 'react';
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
              console.log(data, "handle delete data")
            }

      
    const getPosts = async () => {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
            headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
    
        const {data: {posts}} = await response.json()
        // console.log(posts, "unauth posts")
        setPosts(posts) 
        // console.log(posts, "are these posts") 

    };

   
    // const posts = await response.json();
    // console.log('post data', data)
    // setPosts(posts);
    // return posts;

    // const message = () => {
    //     console.log("sandwiches")
    //     return(
    //         <form>
    //           <textarea placeholder="Write Message" onChange={(ev) => {
    //               posts.messages = (ev.target.value)}}>
    //                 {console.log("event", ev.target.value)}
    //               </textarea>
    //           <button type="submit">Send Message</button>
    //         </form>
    //         )
    // };

    // const MessageForm = () => {
    //     console.log("tortilla chips")
    //     console.log("this is the post from message form", posts)
    //     return(
    //       <form>
    //         <textarea placeholder="Write Message" onChange={(e) => {posts.message = posts.message.e.target.value}}></textarea>
    //         <button type="submit">Send Message</button>
    //       </form>
         
    //     );
    //   }

    // const MessageForm = () => {
    //     const [messages, setMessages] = useState([]);
      
    //     const handleMessage= async () => {
    //       const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
    //         //   method: 'POST',
    //           headers: {
    //               "Content-Type": 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //               }
    //             })
    //             const data = await response.json();
    //             console.log(data, "handle message data")
    //           }
    //     // console.log("this is the post from message form", post)
    //     return(
    //       <form onSubmit={MessageForm}>
    //         <textarea placeholder="Write Message" onChange={(ev) => setMessages(ev.target.value)}></textarea>
    //         <button type="submit" onClick={handleMessage}>Send Message</button>
    //       </form>
    //     );
    //   }


return <>
    { 
        posts.map((post) => {
            // include is author in obj use is author with stuff
            const {title, description, price, location, _id, author, messages, username} = post;
            return (<div key = {_id} className = "post">
                <h2>{title}</h2>
                <h3>{price}</h3>
                <div> {description}</div>
                {location === "[On Request]" ? <h3>Location: {location}</h3> : "" }
                <h3>Posted By: {post.author.username}</h3>
                {/* <h3>{messages}</h3> */}
                {`${token}` && !post.isAuthor ? <MessageForm /> : "" }
                {`${token}` && post.isAuthor ? <button className="btn btn-outline-info">Edit</button> : "" }
                {`${token}` && post.author.username === "jess" ? <button className="btn btn-outline-danger" onClick= {() => {handleDelete(_id)}}>Delete</button> : "" }
              
               
            </div>
            )
        })
    }

</>

};

export default AllPosts;