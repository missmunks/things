import React, { useEffect, useState } from 'react';




    const Profile = ( { token, user,} ) => {
   
        useEffect(() => {
            handleUser()
        }, []);

        const [ messages, setMessages ] = useState([]);
        const handleUser = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                }),
                data = await response.json();
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
        

                 
              export default Profile  