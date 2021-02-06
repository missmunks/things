import React, { useEffect, useState } from 'react';




    const Profile = ( { token, setUser, posts, user, content, setContent } ) => {
        const [ messages, setMessages ] = useState([]);
        const fetchUser = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                }),
                data = await response.json();
                console.log('user posts: ',data?.data?.posts)
                console.log("user messages : ", data?.data?.messages)
                setMessages(data?.data?.messages)
            }

            return <>
    <div>
         <h2> Messages sent to you: </h2> 
         <div> {messages?.map((message, idx) => {
             return (
                    <div key={idx}>
                        <h3> Message From: { message.fromUser.username === user?.username ? message.fromUser.username : ''} </h3>
                        <h4>{message.post.title} </h4>
                        <p>{message.content} </p> <hr/> <br/>
                    </div>)
             
         })}</div>
         </div>
         </>
            };
        
  
    
  
  
//   const getMessages = async () => {
    
//     console.log("cookies")
        
//               const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me`, {
//                 method: 'GET',
//                 headers: {
//                   "Content-Type": "application/json",
//                   "Authorization": `Bearer ${token}`, 
//                 },
            
//               }) 
//               const {data} = await response.json();
//               console.log('message form data' , data);
//               setUser(user) 
//               console.log("user,", user)
            
              
              
      
//             }
  
            
//   console.log("this is a user I hope", user)
//             return <h1>HI</h1>
              
//                 // posts.map((post) => {
                 
//                 //   const {username, fromUser, messages} = post
//                 //   console.log (username, fromUser, messages)

//         };
                 
              export default Profile  