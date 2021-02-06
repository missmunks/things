import React, {useEffect, useState} from "react";



const MessageForm = ({token}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    handleMessage()
  }, [])

  const handleMessage= async () => {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/me`, {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              post: {
                messages
              }
            })
          })
          const data = await response.json();
          console.log(data, "handle message data")
        }
  // console.log("this is the post from message form", post)
  return(<>
    <form onSubmit={MessageForm}>
      <textarea placeholder="Write Message" onChange={(ev) => setMessages(ev.target.value)}></textarea>
      <button type="submit" onClick={handleMessage}>Send Message</button>
    </form>
        </>
  );

  
}


// const MessageForm = ({post}) => {
//   const [messages, setMessages] = useState([]);

//   const handleMessage= async (id) => {
//     const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${id}`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": 'application/json',
//               'Authorization': `Bearer ${token}`
//             }
//           })
//           const data = await response.json();
//           console.log(data, "handle message data")
//         }
//   console.log("this is the post from message form", post)
//   return(
//     <form onSubmit={MessageForm}>
//       <textarea placeholder="Write Message" onChange={(ev) => setMessages(ev.target.value)}></textarea>
//       <button type="submit" onClick={handleMessage}>Send Message</button>
//     </form>
//   );
// }

export default MessageForm;
            
          
        
       
     
        



