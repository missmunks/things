import React, {useEffect, useState} from "react";

const MessageForm = () => {
  const [posts, setPosts] = useState([])
  const myToken = localStorage.getItem('myToken')
  const [messages, setMessages] = useState("");

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`, {
        headers: {
              'Authorization': `Bearer ${myToken}`
            }
          })

    const {data: {posts}} = await response.json()
    setPosts(posts) 
};

  const {_id} = posts


  const handleMessage = async (ev) => {
    ev.preventDefault();

    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${_id}/messages`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            'Authorization': `Bearer ${myToken}`
            },
            body: JSON.stringify({
              posts: {
                messages
              }
            })
          })
          const data = await response.json();
          setMessages("")
        }

  return(<>
    <form onSubmit={handleMessage}>
      <textarea placeholder="Write Message" value = {messages} onChange={(ev) => setMessages(ev.target.value)}></textarea>
      <button type="submit">Send Message</button>
    </form>
        </>
  ); 
}
export default MessageForm;
            
          
        
       
     
        



